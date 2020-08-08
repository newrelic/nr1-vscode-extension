// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import * as cliCommands from "./nr1-cli-commands";
import pickProfile from "../utils/pick-profile";
import runCommand from "../utils/run-command";

const selectDefaultProfile = async () => {
  const profileName = await pickProfile();

  if (profileName) {
    function handleSetProfileResponse() {
      vscode.window.showInformationMessage(
        `Default profile updated to ${profileName}`
      );
    }

    runCommand(cliCommands.setProfile(profileName), handleSetProfileResponse);
  }
};

export default selectDefaultProfile;
