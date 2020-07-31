import * as vscode from "vscode";

const getResponseHandlerForCreate = (name: string, filePath: string) => {
  return async (err: Error, stdout: string, stderr: string) => {
    if (err) {
      vscode.window.showErrorMessage(stderr);
    } else {
      // open the created
      vscode.window.showInformationMessage(stdout);
      let folderUrl = vscode.Uri.file(`${filePath}/${name}`);
      await vscode.commands.executeCommand(
        "vscode.openFolder",
        folderUrl,
        true
      );
    }
  };
};

export default getResponseHandlerForCreate;
