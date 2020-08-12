import * as vscode from "vscode";

const path = require("path");

const handleCreateNerdpackResponse = (name: string, filePath: string) => {
  return async (err: Error, stdout: string, stderr: string) => {
    if (err) {
      console.log(err);
      console.log(filePath);
      console.log(stderr);
      console.log(name);
      console.log(vscode.Uri.file(path.normalize(`${filePath}/${name}`)));
      console.log(path.normalize(`${filePath}/${name}`));
      vscode.window.showErrorMessage(stderr);
    } else {
      // open the created
      console.log(filePath);
      vscode.window.showInformationMessage(stdout);
      let folderUrl = vscode.Uri.file(`${filePath}/${name}`);
      console.log(folderUrl);
      await vscode.commands.executeCommand(
        "vscode.openFolder",
        folderUrl,
        true
      );
    }
  };
};

export default handleCreateNerdpackResponse;
