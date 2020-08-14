import { NO_PROFILE_FOUND } from "./../constants/errors";
import * as vscode from "vscode";

const fs = require("fs");
const os = require("os");

interface Profile {
  apiKey: string;
  region: string;
}

const pickProfile = async (): Promise<string | undefined> => {
  const { profiles, currentDefault } = getProfiles();
  const profileNames = Object.keys(profiles).map((profileName) => {
    if (profileName === currentDefault) {
      return `${profileName} (current default)`;
    }
    return profileName;
  });

  return await vscode.window.showQuickPick(profileNames);
};

export const getProfiles = () => {
  const credentialPath = `${os.homedir()}/.newrelic/credentials.json`;
  const defaultPath = `${os.homedir()}/.newrelic/default-profile.json`;

  let profiles;
  let currentDefault;

  try {
    profiles = JSON.parse(fs.readFileSync(credentialPath));
    currentDefault = JSON.parse(fs.readFileSync(defaultPath));
  } catch (err) {
    vscode.window.showErrorMessage(NO_PROFILE_FOUND);
  }

  return { profiles, currentDefault };
};

export const getDefaultProfile = (): Profile => {
  const { profiles, currentDefault } = getProfiles();
  return profiles?.[currentDefault];
};

export default pickProfile;
