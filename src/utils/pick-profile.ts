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

  const profiles = JSON.parse(fs.readFileSync(credentialPath));
  const currentDefault = JSON.parse(fs.readFileSync(defaultPath));

  return { profiles, currentDefault };
};

export const getDefaultProfile = (): Profile => {
  const { profiles, currentDefault } = getProfiles();
  return profiles?.[currentDefault];
};

export default pickProfile;
