// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import * as cliCommands from "./nr1-cli-commands";
import getUuid from "../utils/get-uuid";
import runCommand from "../utils/run-command";

const generateUuid = () => {
  getUuid(async (uuid) => {
    if (uuid) {
      const answer = await vscode.window.showQuickPick(["Yes", "No"], {
        placeHolder: `Replace existing UUID? (${uuid})`,
      });

      if (answer === "No") {
        return;
      }
    }

    runCommand(cliCommands.generateUuid());
  });
};

export default generateUuid;
