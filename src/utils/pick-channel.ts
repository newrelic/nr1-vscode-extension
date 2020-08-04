import * as vscode from "vscode";

const pickChannel = async () => {
  const channel = await vscode.window.showQuickPick(["STABLE", "BETA", "DEV"]);
  if (!channel) {
    vscode.window.showErrorMessage("A channel is required");
    throw new Error("A channel is required");
  }
  return channel;
};

export default pickChannel;
