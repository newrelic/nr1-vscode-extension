import * as cliCommands from "./nr1-cli-commands";
import pickChannel from "../utils/pick-channel";
import runCommand from "../utils/run-command";

const subscribeNerdpack = async () => {
  const channel = await pickChannel();
  channel && runCommand(cliCommands.subscribeNerdpack(channel));
};

export default subscribeNerdpack;
