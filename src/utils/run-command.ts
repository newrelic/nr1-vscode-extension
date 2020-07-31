const cp = require("child_process");

import handleResponse from "../response-handlers/default";
import getPath from "./get-path";

const runCommand = (
  command: string,
  responseHandler: Function = handleResponse,
  path: string | undefined = undefined
) => {
  cp.exec(command, { cwd: path || getPath() }, responseHandler);
};

export default runCommand;
