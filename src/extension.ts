// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import * as cliCommands from "./nr1-cli-commands";
import pickChannel from "./utils/pick-channel";
import runCommand from "./utils/run-command";
import handleCreateCatalogResponse from "./response-handlers/create-catalog";
import getResponseHandlerForCreate from "./response-handlers/create-nerdpack";
import { COMMANDS } from "./constants/commands";

/**********
 * TODO
 * Create and open a workspace on nr1Create
 * On all other commands, present a picker based on folders in the workspace that have an nr1.json
 *******/

const nr1Create = async ({ name, filePath }: any) =>
  runCommand(
    `cd ${filePath} && ${cliCommands.createNerdpack(name)}`,
    getResponseHandlerForCreate(name, filePath),
    "~"
  );

const nr1CreateCatalog = () =>
  runCommand(cliCommands.createCatalog(), handleCreateCatalogResponse);

const publishNerdpack = (channel: string) =>
  runCommand(cliCommands.publishNerdpack(channel));

const deployNerdpack = (channel: string) =>
  runCommand(cliCommands.deployNerdpack(channel));

const subscribeNerdpack = (channel: string) =>
  runCommand(cliCommands.subscribeNerdpack(channel));

const unsubscribeNerdpack = () => runCommand(cliCommands.unsubscribeNerdpack());

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
    vscode.commands.registerCommand(COMMANDS.CREATE_CATALOG, async () => {
      nr1CreateCatalog();
    }),

    vscode.commands.registerCommand(COMMANDS.CATALOG_INFO, () =>
      runCommand(cliCommands.catalogInfo())
    ),

    vscode.commands.registerCommand(COMMANDS.CATALOG_SUBMIT, () =>
      runCommand(cliCommands.catalogSubmit())
    ),

    vscode.commands.registerCommand(COMMANDS.RUN_NERDPACK, async () => {
      nr1RunNerdpack();
    }),

    vscode.commands.registerCommand(COMMANDS.CREATE_NERDPACK, async () => {
      const nameInput = vscode.window.showInputBox({ prompt: "Nerdpack name" });
      const name = await nameInput;
      let filePath = vscode.workspace.rootPath;
      if (!filePath) {
        const selected = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
          openLabel: "Select folder",
        });
        filePath = selected?.[0].path;
      }
      if (!filePath) {
        throw new Error("Have to select a file, please");
      }

      nr1Create({ name, filePath });
    })
  );

  vscode.commands.registerCommand(COMMANDS.PUBLISH_NERDPACK, async () => {
    const channel = await pickChannel();
    publishNerdpack(channel);
  });

  vscode.commands.registerCommand(COMMANDS.DEPLOY_NERDPACK, async () => {
    const channel = await pickChannel();
    deployNerdpack(channel);
  });

  vscode.commands.registerCommand(COMMANDS.SUBSCRIBE_NERDPACK, async () => {
    const channel = await pickChannel();
    subscribeNerdpack(channel);
  });

  vscode.commands.registerCommand(COMMANDS.UNSUBSCRIBE_NERDPACK, async () => {
    unsubscribeNerdpack();
  });

  vscode.commands.registerCommand(
    COMMANDS.SELECT_PROFILE,
    cliCommands.selectProfile
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
