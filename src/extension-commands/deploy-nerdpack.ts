import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import pickChannel from "../utils/pick-channel";

const deployNerdpack = async () => {
  const channel = await pickChannel();
  channel && runCommand(cliCommands.deployNerdpack(channel));
};

export default deployNerdpack;
