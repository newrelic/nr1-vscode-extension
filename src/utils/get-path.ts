import { WORKSPACE_REQUIRED } from "./../constants/errors";
import * as vscode from "vscode";

const getPath = () => {
  const rootPath = vscode.workspace.rootPath;
  if (rootPath) {
    return rootPath;
  }
  return vscode.window.showErrorMessage(WORKSPACE_REQUIRED);
};

export default getPath;
