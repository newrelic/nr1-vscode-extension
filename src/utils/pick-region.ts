import * as vscode from "vscode";
import { REGIONS } from "../constants/regions";

const pickRegion = async (): Promise<string | undefined> => {
  const region = await vscode.window.showQuickPick(Object.values(REGIONS), {
    placeHolder: `Which region is your New Relic account associated with?`,
  });

  if (!region) {
    vscode.window.showErrorMessage("A region is required");
  }

  return region;
};

export default pickRegion;
