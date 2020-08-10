import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";

const unsubscribeNerdpack = async () => {
  runCommand(cliCommands.unsubscribeNerdpack());
};

export default unsubscribeNerdpack;
