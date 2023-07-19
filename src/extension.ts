import * as vscode from 'vscode';
import * as path from 'path';
import { ChannelCredentials, createChannel, createClient } from 'nice-grpc';
import { BrokerDefinition, GetDatapointsRequest } from './proto_gen/sdv/databroker/v1/broker';


function uiLog(panel: vscode.WebviewPanel, logMsg: string) {
  panel.webview.postMessage({ command: 'log', logText: `[BACKEND] ${logMsg}` });
}


function parseConfig(configMsg: any) {
  const url = new URL(configMsg.databrokerURL);
  return { databrokerURL: url, signalPath: configMsg.signalPath };
}

export async function activate(context: vscode.ExtensionContext) {
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

      const postDatapoint = (dp: number[]): void => {
        const timestamp: number = dp[0];
        const val: number = dp[1];
        panel.webview.postMessage({
          command: 'getDataResp',
          data: {
            x: [[timestamp]],
            y: [[val]]
          }
        });
      };

      panel.webview.onDidReceiveMessage(
        message => {
          if (message.command === "getDataReq") {

            let config;
            try {
              config = parseConfig(message);
            } catch (err) {
              uiLog(panel, `Could not parse configuration: ${err}`);
              return;
            }
            getDatapoint(config)
              .then(postDatapoint)
              .catch((reason) => uiLog(panel, reason));
          }
        }
        , undefined, context.subscriptions);

    })
  );
}

async function getDatapoint(config: any) {
  let channel = createChannel(`${config.databrokerURL.hostname}:${config.databrokerURL.port}`, ChannelCredentials.createInsecure());
  let client = createClient(
    BrokerDefinition,
    channel
  );

  let request = GetDatapointsRequest.create({ datapoints: [config.signalPath] });
  let response = await client.getDatapoints(request);
  const ts = Number(response.datapoints[config.signalPath].timestamp);
  const val = response.datapoints[config.signalPath].value;

  switch (val?.$case) {
    case 'boolValue':
      return [ts, +val.boolValue];
    case 'floatValue':
      return [ts, val.floatValue];
    case 'doubleValue':
      return [ts, val.doubleValue];
    case 'int32Value':
      return [ts, val.int32Value];
    case 'int64Value':
      return [ts, val.int64Value];
    case 'uint32Value':
      return [ts, val.uint32Value];
    case 'uint64Value':
      return [ts, val.uint64Value];
    default:
      throw new Error("Unsupported value for plotting");
  }
}

function renderWebview(panel: vscode.WebviewPanel, context: vscode.ExtensionContext) {
  panel.webview.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Plotly WebView</title>
          <meta http-equiv="Content-Security-Policy" content=            // Start the draw task in the UI            
          "default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' vscode-resource:; style-src 'unsafe-inline'">
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
          <div id="log-console"></div> 
          <script>
            const vscode = acquireVsCodeApi();
            let handle = undefined;
            let initialTimestamp = Date.now();
            let maxLogLines = 50;

            window.addEventListener('message', event => {
              const message = event.data;
              if (message.command === "getDataResp") {
                updatePlot(message.data);
              }
              if (message.command === 'updatePlot') {
                Plotly.extendTraces('plotlyChart', message.data, [0]);
              }
              if (message.command === "log") {
                log(message.logText);
              }
            });
            
            function resetLog() {
              let logConsole = document.getElementById("log-console");
              logConsole.innerHTML = '<h2>Log</h2>';
            }

            function log(logText) {
              let logConsole = document.getElementById("log-console");
              if (logConsole.childElementCount >= maxLogLines) {
                resetLog();
              }
              let p = document.createElement("p");
              p.innerText = logText;
              logConsole.append(p);
            }

            function initPlot() {
              let updateMs = parseInt(document.getElementById('update-interval').value);
              let databroker = document.getElementById('databroker-address').value;
              let datapoint = document.getElementById('signal').value;
              resetLog();
              drawPlot();
              if (handle !== undefined) {
                console.log("Redrawing plot");
                clearInterval(handle);
                initialTimestamp = Date.now();
              }
              handle = setInterval(() => {
                vscode.postMessage({ command: 'getDataReq', databrokerURL: databroker, signalPath: datapoint });
              }, updateMs
              
              );
            }

            function updatePlot(data) {
              plotData = {
                // hack: we use the system timestamp to count seconds
                // as the databroker only updates the datapoint timestamp on value changes
                // leading to the plot not visualizing large sections when the signal
                // is constant
                x: [[ (Date.now() - initialTimestamp) / 1000 ]],
                y: data.y
              };
              console.log(plotData);
              Plotly.extendTraces('plotlyChart', plotData, [0]);
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

