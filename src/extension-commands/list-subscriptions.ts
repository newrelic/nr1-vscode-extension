import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";

const listSubscriptions = () => {
  runCommand(cliCommands.listSubscriptions());
};

export default listSubscriptions;
