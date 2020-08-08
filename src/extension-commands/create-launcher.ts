import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import { getNameInput } from "../utils/get-nerdpack-name-input";

const createLauncher = async () => {
  const launcherName = await getNameInput();

  if (!launcherName) {
    throw new Error("Have to give your launcher a name, please");
  }

  runCommand(cliCommands.createLauncher(launcherName));
};

export default createLauncher;
