const cp = require("child_process");
const path = require("path");

import handleResponse from "../response-handlers/default";
import getPath from "./get-path";

const runCommand = (
  command: string,
  responseHandler: Function = handleResponse,
  filePath: string | undefined = undefined
) => {
  cp.exec(command, { cwd: filePath || getPath() }, responseHandler);
};

export default runCommand;
