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
    throw new Error("Have to select a file, please");
  }
  if (!name) {
    throw new Error("Have to give your nerdpack a name, please");
  }

  runCommand(
    `cd ${filePath} && ${cliCommands.createNerdpack(name)}`,
    handleCreateNerdpackResponse(name, filePath),
    filePath
  );
};

export default createNerdpack;
