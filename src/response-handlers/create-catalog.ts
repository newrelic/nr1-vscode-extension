import * as vscode from "vscode";

const handleCreateCatalogResponse = async (
  err: Error,
  stdout: string,
  stderr: string
) => {
  if (err) {
    vscode.window.showErrorMessage(stderr);
  }
  const output = vscode.window.createOutputChannel("New Relic One");
  output.append(stdout);
  output.show();
  const files = await vscode.workspace.findFiles(
    "**/catalog/*",
    "node_modules",
    10
  );

  files.forEach((fileUri) => {
    vscode.workspace.openTextDocument(fileUri).then((document) => {
      vscode.window.showTextDocument(document, vscode.ViewColumn.Beside);
    });
  });
};

export default handleCreateCatalogResponse;
