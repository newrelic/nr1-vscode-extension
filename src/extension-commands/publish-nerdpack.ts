import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import pickChannel from "../utils/pick-channel";

const publishNerdpack = async () => {
  const channel = await pickChannel();
  runCommand(cliCommands.publishNerdpack(channel));
};

export default publishNerdpack;
