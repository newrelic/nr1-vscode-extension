import * as vscode from "vscode";
import { NAME_REQUIRED } from "./../constants/errors";
import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import { getNameInput } from "../utils/get-nerdpack-name-input";

const createLauncher = async () => {
  const launcherName = await getNameInput();

  if (!launcherName) {
    return vscode.window.showErrorMessage(NAME_REQUIRED("launcher"));
  }
  runCommand(cliCommands.createLauncher(launcherName));
};

export default createLauncher;
