import * as vscode from "vscode";
import { NAME_REQUIRED, FILE_REQUIRED } from "./../constants/errors";
import {
  getNameInput,
  getFilePathInput,
} from "../utils/get-nerdpack-name-input";
import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import handleCreateNerdpackResponse from "../response-handlers/create-nerdpack";

const createNerdpack = async () => {
  const name = await getNameInput();
  const filePath = await getFilePathInput();
  if (!filePath) {
    return vscode.window.showErrorMessage(FILE_REQUIRED);
  }

  if (!name) {
    return vscode.window.showErrorMessage(NAME_REQUIRED("nerdpack"));
  }

  runCommand(
    `cd ${filePath} && ${cliCommands.createNerdpack(name)}`,
    handleCreateNerdpackResponse(name, filePath),
    filePath
  );
};

export default createNerdpack;
