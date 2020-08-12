import * as vscode from "vscode";
const path = require("path");

const getPath = () => {
  const rootPath = vscode.workspace.rootPath;
  if (rootPath) {
    return rootPath;
  }
  vscode.window.showErrorMessage("This command must be run from a workspace");
  throw new Error("Could not find path");
};

export default getPath;
