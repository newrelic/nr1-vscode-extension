import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import { getNameInput } from "../utils/get-nerdpack-name-input";

const createNerdlet = async () => {
  const nerdletName = await getNameInput();

  if (!nerdletName) {
    throw new Error("Have to give your nerdlet a name, please");
  }

  runCommand(cliCommands.createNerdlet(nerdletName));
};

export default createNerdlet;
