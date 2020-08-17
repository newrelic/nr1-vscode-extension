// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { COMMANDS } from "./constants/commands";
import {
  addProfile,
  catalogSubmit,
  createCatalog,
  createLauncher,
  createNerdlet,
  createNerdpack,
  deployNerdpack,
  generateUuid,
  listSubscriptions,
  openDevDocs,
  publishNerdpack,
  runNerdpack,
  searchDevDocs,
  selectDefaultProfile,
  showCatalogInfo,
  subscribeNerdpack,
  undeployNerdpack,
  unsubscribeNerdpack,
} from "./extension-commands/index";

/**********
 * TODO
 * Create and open a workspace on nr1Create
 * On all other commands, present a picker based on folders in the workspace that have an nr1.json
 *******/

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(COMMANDS.CREATE_CATALOG, createCatalog),
    vscode.commands.registerCommand(COMMANDS.CATALOG_INFO, showCatalogInfo),
    vscode.commands.registerCommand(COMMANDS.CATALOG_SUBMIT, catalogSubmit),
    vscode.commands.registerCommand(COMMANDS.RUN_NERDPACK, runNerdpack),
    vscode.commands.registerCommand(COMMANDS.CREATE_NERDPACK, createNerdpack),
    vscode.commands.registerCommand(COMMANDS.CREATE_NERDLET, createNerdlet),
    vscode.commands.registerCommand(COMMANDS.CREATE_LAUNCHER, createLauncher),
    vscode.commands.registerCommand(COMMANDS.PUBLISH_NERDPACK, publishNerdpack),
    vscode.commands.registerCommand(COMMANDS.DEPLOY_NERDPACK, deployNerdpack),
    vscode.commands.registerCommand(
      COMMANDS.UNDEPLOY_NERDPACK,
      undeployNerdpack
    ),
    vscode.commands.registerCommand(
      COMMANDS.SUBSCRIBE_NERDPACK,
      subscribeNerdpack
    ),
    vscode.commands.registerCommand(
      COMMANDS.UNSUBSCRIBE_NERDPACK,
      unsubscribeNerdpack
    ),
    vscode.commands.registerCommand(COMMANDS.ADD_PROFILE, addProfile),
    vscode.commands.registerCommand(
      COMMANDS.SELECT_PROFILE,
      selectDefaultProfile
    ),
    vscode.commands.registerCommand(COMMANDS.GENERATE_UUID, generateUuid),
    vscode.commands.registerCommand(COMMANDS.OPEN_DEVELOPER_DOCS, openDevDocs),
    vscode.commands.registerCommand(
      COMMANDS.LIST_SUBSCRIPTIONS,
      listSubscriptions
    ),
    vscode.commands.registerCommand(
      COMMANDS.SEARCH_DEVELOPER_DOCS,
      searchDevDocs
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
