import { CHANNEL_REQUIRED } from "./../constants/errors";
import * as vscode from "vscode";

const pickChannel = async () => {
  const channel = await vscode.window.showQuickPick(["STABLE", "BETA", "DEV"]);
  if (!channel) {
    return vscode.window.showErrorMessage(CHANNEL_REQUIRED);
  }
  return channel;
};

export default pickChannel;
