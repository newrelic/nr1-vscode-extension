import * as vscode from "vscode";

const fs = require("fs");
const os = require("os");

const pickProfile = async (): Promise<string | undefined> => {
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

  return await vscode.window.showQuickPick(profileNames);
};

export default pickProfile;
