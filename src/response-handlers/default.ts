import * as vscode from "vscode";

const handleResponse = (err: Error, stdout: string, stderr: string) => {
  if (err) {
    vscode.window.showErrorMessage(stderr);
  }
  const output = vscode.window.createOutputChannel("New Relic One");
  output.append(stdout);
  output.show();
};

export default handleResponse;
