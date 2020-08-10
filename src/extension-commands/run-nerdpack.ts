// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

const nr1RunNerdpack = () => {
  var terminal = vscode.window.createTerminal("Nerdpack serve");
  terminal.show();
  terminal.sendText("nr1 nerdpack:serve");
  const uri = vscode.Uri.parse(
    "https://staging-one.newrelic.com?nerdpacks=local"
  );
  vscode.env.openExternal(uri);
};

export default nr1RunNerdpack;
