// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import pickRegion from "../utils/pick-region";
import { getDeveloperCenterUrl } from "../constants/urls";

const addProfile = async () => {
  const region = await pickRegion();

  if (region) {
    const uri = vscode.Uri.parse(getDeveloperCenterUrl(region), true);
    vscode.env.openExternal(uri);
  }
};

export default addProfile;
