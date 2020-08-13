// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import {
  NR_ONE_EU_URL,
  NR_ONE_LOCAL_QUERY_PARAM,
  NR_ONE_US_URL,
} from "./../constants/urls";
import { getDefaultProfile } from "./../utils/pick-profile";

const nr1RunNerdpack = () => {
  const defaultProfile = getDefaultProfile();

  const terminal = vscode.window.createTerminal("Nerdpack serve");
  terminal.show();
  terminal.sendText("nr1 nerdpack:serve");

  const uri = vscode.Uri.parse(getLocalNROneUrl(defaultProfile.region));
  vscode.env.openExternal(uri);
};

const getLocalNROneUrl = (region: string) => {
  let url;
  switch (region) {
    case "us":
      url = `${NR_ONE_US_URL}${NR_ONE_LOCAL_QUERY_PARAM}`;
      break;
    case "eu":
      url = `${NR_ONE_EU_URL}${NR_ONE_LOCAL_QUERY_PARAM}`;
    default:
      url = `https://${region}-one.newrelic.com?nerdpacks=local`;
      break;
  }
  return url;
};

export default nr1RunNerdpack;
