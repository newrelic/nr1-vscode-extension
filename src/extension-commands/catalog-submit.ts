import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";

const catalogSubmit = () => runCommand(cliCommands.catalogSubmit());

export default catalogSubmit;
