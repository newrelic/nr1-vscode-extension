// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

const getNerdpackNameInput = async () => {
    const nameInput = vscode.window.showInputBox({ prompt: "Nerdpack name" });
    const name = await nameInput;
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
    return { filePath, name };
};

export default getNerdpackNameInput;