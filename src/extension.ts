import * as vscode from 'vscode';
import * as path from 'path';
import * as grpc from '@grpc/grpc-js'
import { BrokerClient as DatabrokerClient } from './sdv/databroker/v1/broker_grpc_pb';
import { GetDatapointsReply, GetDatapointsRequest } from './sdv/databroker/v1/broker_pb';


function uiLog(panel: vscode.WebviewPanel, logMsg: string) {
  panel.webview.postMessage({ command: 'log', logText: `[BACKEND] ${logMsg}` });
}


function parseConfig(configMsg: any) {
  const url = new URL(configMsg.databrokerAddress);

  if (Number.isInteger(configMsg.updateInterval)) {
    throw new Error(`Update interval of ${configMsg.updateInterval} is not a valid integer`);
  }

  const updateInterval = parseInt(configMsg.updateInterval);
  return { databrokerURL: url, updateInterval: updateInterval, signalPath: configMsg.signalPath };

}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.showVSSLivePlot', () => {
      const panel = vscode.window.createWebviewPanel(
        'vssLivePlot',
        'VSS Live Plot',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))],
          retainContextWhenHidden: true
        }
      );

      // Set the HTML content for the webview
      renderWebview(panel, context);
      let plotTaskHandles: NodeJS.Timer[] = [];

      panel.webview.onDidReceiveMessage(
        message => {
          if (message.command === "initPlot") {

            let config;
            try {
              config = parseConfig(message);
            } catch (err) {
              uiLog(panel, `Could not parse configuration: ${err}`);
              return;
            }

            // Start the draw task in the UI            
            panel.webview.postMessage({ command: "drawPlot" });

            // Start the data feeder
            let handle = startDataFeeder(panel, config);
            plotTaskHandles.push(handle);

            // There already was a plot, cancel it's data feeder and redraw
            if (plotTaskHandles.length > 1) {
              clearOldFeeders(plotTaskHandles);
              uiLog(panel, "UI redrawn");
            }

            return;
          }
        }
        , undefined, context.subscriptions);

    })
  );
}

function clearOldFeeders(plotTaskHandles: NodeJS.Timer[]) {
  while (plotTaskHandles.length !== 1) {
    let h = plotTaskHandles.shift();
    clearInterval(h);
    console.log(`Cleared old feeder task ${h}`);
  }
}

function startDataFeeder(panel: vscode.WebviewPanel, config: any) {
  let cntr = 1;
  const c = new DatabrokerClient(
    `${config.databrokerURL.hostname}:${config.databrokerURL.port}`,
    grpc.credentials.createInsecure()
  );
  const r = new GetDatapointsRequest();

  r.setDatapointsList([config.signalPath]);

  let handle = setInterval(() => {
    c.getDatapoints(r, (err, resp) => {
      let val: number = extractDataPointValue(resp, config.signalPath);

      // hack: call count * updateInteval (ms) / 1000 = monotonic time in seconds starting from the draw init
      panel.webview.postMessage({
        command: 'updatePlot',
        data: {
          x: [[cntr * config.updateInterval / 1000]],
          y: [[val]]
        }
      });
    });
    cntr += 1;
  }, config.updateInterval);
  return handle;
}

function extractDataPointValue(resp: GetDatapointsReply, signalPath: any) {
  let val: number | undefined = 0.0;
  try {
    let map = resp.getDatapointsMap();
    val = map.get(signalPath)?.getFloatValue();
  } catch (valerr) {
    console.log("Value parsing error!");
    console.log(valerr);
  }
  if (val === undefined) {
    return 0.0
  }
  return val;
}

function renderWebview(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
  panel.webview.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Plotly WebView</title>
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' vscode-resource:; style-src 'unsafe-inline'">
          <script src="${panel.webview.asWebviewUri(vscode.Uri.file(path.join(context.extensionPath, 'media', 'plotly.min.js')))}"></script>
        </head>
        <body>
          <h1>VSS Live Plot</h1>
          <div>
            <label for="signal">Signal: </label>
            <input type="text" id="signal" value="Vehicle.Speed">
            <label for="databroker-address">Databroker Address: </label>
            <input type="text" id="databroker-address" value="grpc://127.0.0.1:55555">
            <label for="update-interval">Update Interval (ms): </label>
            <input type="text" id="update-interval" step="any" value="200">
            <button onclick="initPlot()">Start</button>
          </div>
          <div id="plotlyChart"></div>
          <div id="log-console">
            <h2>Log</h2>
          </div> 
          <script>
            const vscode = acquireVsCodeApi();

            window.addEventListener('message', event => {
              const message = event.data;
              if (message.command === "drawPlot") {
                drawPlot();
              }
              if (message.command === 'updatePlot') {
                Plotly.extendTraces('plotlyChart', message.data, [0]);
              }
              if (message.command === "log") {
                log(message.logText);
              }
            });
            
            function log(logText) {
              let logConsole = document.getElementById("log-console");
              let p = document.createElement("p");
              p.innerText = logText;
              logConsole.append(p);
            }

            function initPlot() {
              let updateMs = document.getElementById('update-interval').value;
              let databroker = document.getElementById('databroker-address').value;
              let datapoint = document.getElementById('signal').value;
              vscode.postMessage({ command: 'initPlot', updateInterval: updateMs, databrokerAddress: databroker, signalPath: datapoint });
            }

            function drawPlot() {
              Plotly.newPlot('plotlyChart', [{
                x: [0],
                y: [0],
                mode: 'lines',
                line: {color: '#80CAF6'}
              }], {
                xaxis: {title: "Time (s)"},
                yaxis: {title: "Datapoint value"}
              });
            }
          </script>
        </body>
        </html>
      `;
}

export function deactivate() { }

