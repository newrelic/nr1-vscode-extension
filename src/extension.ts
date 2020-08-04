// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import * as cliCommands from "./nr1-cli-commands";
import pickChannel from "./utils/pick-channel";
import pickProfile from "./utils/pick-profile";
import runCommand from "./utils/run-command";
import {
  getNameInput,
  getNerdpackNameAndFilePathInput,
} from "./utils/get-nerdpack-name-input";
import getUuid from "./utils/get-uuid";
import handleCreateCatalogResponse from "./response-handlers/create-catalog";
import handleCreateNerdpackResponse from "./response-handlers/create-nerdpack";
import { COMMANDS } from "./constants/commands";
import { DEVELOPER_WEBSITE_URL } from "./constants/urls";

/**********
 * TODO
 * Create and open a workspace on nr1Create
 * On all other commands, present a picker based on folders in the workspace that have an nr1.json
 *******/

const nr1RunNerdpack = () => {
  var terminal = vscode.window.createTerminal("Nerdpack serve");
  terminal.show();
  terminal.sendText("nr1 nerdpack:serve");
  const uri = vscode.Uri.parse(
    "https://staging-one.newrelic.com?nerdpacks=local"
  );
  vscode.env.openExternal(uri);
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMANDS.CREATE_CATALOG, () =>
      runCommand(cliCommands.createCatalog(), handleCreateCatalogResponse)
    ),

    vscode.commands.registerCommand(COMMANDS.CATALOG_INFO, () =>
      runCommand(cliCommands.catalogInfo())
    ),

    vscode.commands.registerCommand(COMMANDS.CATALOG_SUBMIT, () =>
      runCommand(cliCommands.catalogSubmit())
    ),

    vscode.commands.registerCommand(COMMANDS.RUN_NERDPACK, nr1RunNerdpack),

    vscode.commands.registerCommand(COMMANDS.CREATE_NERDPACK, async () => {
      const { filePath, name } = await getNerdpackNameAndFilePathInput();
      if (!filePath) {
        throw new Error("Have to select a file, please");
      }
      if (!name) {
        throw new Error("Have to give your nerdpack a name, please");
      }

      runCommand(
        `cd ${filePath} && ${cliCommands.createNerdpack(name)}`,
        handleCreateNerdpackResponse(name, filePath),
        "~"
      );
    }),

    vscode.commands.registerCommand(COMMANDS.CREATE_NERDLET, async () => {
      const nerdletName = await getNameInput();

      if (!nerdletName) {
        throw new Error("Have to give your nerdlet a name, please");
      }

      runCommand(cliCommands.createNerdlet(nerdletName));
    }),

    vscode.commands.registerCommand(COMMANDS.CREATE_LAUNCHER, async () => {
      const launcherName = await getNameInput();

      if (!launcherName) {
        throw new Error("Have to give your launcher a name, please");
      }

      runCommand(cliCommands.createLauncher(launcherName));
    }),

    vscode.commands.registerCommand(COMMANDS.PUBLISH_NERDPACK, async () => {
      const channel = await pickChannel();
      runCommand(cliCommands.publishNerdpack(channel));
    }),

    vscode.commands.registerCommand(COMMANDS.DEPLOY_NERDPACK, async () => {
      const channel = await pickChannel();
      runCommand(cliCommands.deployNerdpack(channel));
    }),

    vscode.commands.registerCommand(COMMANDS.SUBSCRIBE_NERDPACK, async () => {
      const channel = await pickChannel();
      runCommand(cliCommands.subscribeNerdpack(channel));
    }),

    vscode.commands.registerCommand(COMMANDS.UNSUBSCRIBE_NERDPACK, async () => {
      runCommand(cliCommands.unsubscribeNerdpack());
    }),

    vscode.commands.registerCommand(COMMANDS.SELECT_PROFILE, async () => {
      const profileName = await pickProfile();

      if (profileName) {
        function handleSetProfileResponse() {
          vscode.window.showInformationMessage(
            `Default profile updated to ${profileName}`
          );
        }

        runCommand(
          cliCommands.setProfile(profileName),
          handleSetProfileResponse
        );
      }
    }),

    vscode.commands.registerCommand(COMMANDS.GENERATE_UUID, () => {
      getUuid(async (uuid) => {
        if (uuid) {
          const answer = await vscode.window.showQuickPick(["Yes", "No"], {
            placeHolder: `Replace existing UUID? (${uuid})`,
          });

          if (answer === "No") {
            return;
          }
        }

        runCommand(cliCommands.generateUuid());
      });
    }),

    vscode.commands.registerCommand(COMMANDS.OPEN_DEVELOPER_DOCS, () => {
      const uri = vscode.Uri.parse(DEVELOPER_WEBSITE_URL, true);
      vscode.env.openExternal(uri);
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
