import * as vscode from "vscode";
import { NAME_REQUIRED } from "./../constants/errors";
import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import { getNameInput } from "../utils/get-nerdpack-name-input";

const createVisualization = async () => {
  const visualizationName = await getNameInput();

  if (!visualizationName) {
    return vscode.window.showErrorMessage(NAME_REQUIRED("visualization"));
  }

  runCommand(cliCommands.createVisualization(visualizationName));
};

export default createVisualization;
