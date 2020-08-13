import * as vscode from "vscode";
import { NAME_REQUIRED } from "./../constants/errors";
import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import { getNameInput } from "../utils/get-nerdpack-name-input";

const createNerdlet = async () => {
  const nerdletName = await getNameInput();

  if (!nerdletName) {
    return vscode.window.showErrorMessage(NAME_REQUIRED("nerdlet"));
  }

  runCommand(cliCommands.createNerdlet(nerdletName));
};

export default createNerdlet;
