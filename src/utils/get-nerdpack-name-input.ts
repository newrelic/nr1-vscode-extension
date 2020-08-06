// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export const getFilePathInput = async () => {
  let filePath = vscode.workspace.rootPath;
  if (!filePath) {
    const selected = await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
      openLabel: "Select folder",
    });
    filePath = selected?.[0].path;
  }

  return filePath;
};

export const getNameInput = async () => {
  const nameInput = vscode.window.showInputBox({ prompt: "Name" });
  return await nameInput;
};
