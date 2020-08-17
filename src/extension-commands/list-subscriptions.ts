import * as cliCommands from "./nr1-cli-commands";
import handleResponse from "../response-handlers/default";

const cp = require("child_process");

const listSubscriptions = () => {
  cp.exec(cliCommands.listSubscriptions(), {}, handleResponse);
};

export default listSubscriptions;
