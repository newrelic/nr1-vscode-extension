const fs = require("fs");
const os = require("os");

import { profile } from "console";
import * as vscode from "vscode";

import runCommand from "./utils/run-command";

export const createNerdpack = (nerdpackName: string) =>
  `nr1 create -t nerdpack -n ${nerdpackName}`;

export const createCatalog = () => "nr1 create --type='catalog'";

export const publishNerdpack = (channel: string) =>
  `nr1 nerdpack:publish -c ${channel}`;

export const deployNerdpack = (channel: string) =>
  `nr1 nerdpack:deploy -c ${channel}`;

export const subscribeNerdpack = (channel: string) =>
  `nr1 nerdpack:subscribe -c ${channel}`;

export const unsubscribeNerdpack = () => "nr1 nerdpack:unsubscribe";

export const catalogInfo = () => "nr1 catalog:info";

export const catalogSubmit = () => "nr1 catalog:submit";

const setProfile = (profileName: string | undefined) =>
  `nr1 profiles:default -n ${profileName?.replace(" (current)", "")}`;

export const selectProfile = async () => {
  const credentialPath = `${os.homedir()}/.newrelic/credentials.json`;
  const defaultPath = `${os.homedir()}/.newrelic/default-profile.json`;

  const profiles = JSON.parse(fs.readFileSync(credentialPath));
  const currentDefault = JSON.parse(fs.readFileSync(defaultPath));
  const profileNames = Object.keys(profiles).map((profileName) => {
    if (profileName === currentDefault) {
      return `${profileName} (current default)`;
    }
    return profileName;
  });
  const profileName = await vscode.window.showQuickPick(profileNames);

  runCommand(setProfile(profileName), () => {
    profileName &&
      vscode.window.showInformationMessage(
        `Default profile updated to ${profileName}`
      );
  });
};
