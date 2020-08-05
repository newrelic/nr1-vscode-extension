import * as vscode from "vscode";
import { REGIONS } from "../constants/regions";

const pickRegion = async (): Promise<Region | undefined> => {
  const region = await vscode.window.showQuickPick(REGIONS, {
    placeHolder: `Which region is your New Relic account associated with?`,
  });

  if (!region) {
    vscode.window.showErrorMessage("A region is required");
  }

  return <Region>region;
};

export default pickRegion;
