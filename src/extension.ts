// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
const cp = require("child_process");
const fs = require("fs");
const os = require("os");

import * as cliCommands from './nr1-cli-commands';

/**********
 * TODO
 * Create and open a workspace on nr1Create
 * On all other commands, present a picker based on folders in the workspace that have an nr1.json
 *******/

 // possible helper
const getPath = () => {
  const rootPath = vscode.workspace.rootPath;
  if (rootPath) {
    return rootPath;
  }
  vscode.window.showErrorMessage("This command must be run from a workspace");
  throw new Error("Could not find path");
};

 // possible helper
const handleResponse = (err: Error, stdout: string, stderr: string) => {
  if (err) {
    vscode.window.showErrorMessage(stderr);
  }
  const output = vscode.window.createOutputChannel("New Relic One");
  output.append(stdout);
  output.show();
};

const nr1Create = async ({ name, filePath }: any) => {
  cp.exec(
    `cd ${filePath} && ${cliCommands.createNerdpack(name)}`,
    "~",
    async (err: Error, stdout: string, stderr: string) => {
      if (err) {
        vscode.window.showErrorMessage(stderr);
      } else {
        // open the created
        vscode.window.showInformationMessage(stdout);
        let folderUrl = vscode.Uri.file(`${filePath}/${name}`);
        await vscode.commands.executeCommand(
          "vscode.openFolder",
          folderUrl,
          true
        );
      }
    }
  );
};

const nr1CreateCatalog = () => {
  const path = getPath();
  cp.exec(
    cliCommands.createCatalog(),
    { cwd: path },
    async (err: Error, stdout: string, stderr: string) => {
      if (err) {
        vscode.window.showErrorMessage(stderr);
      }
      const output = vscode.window.createOutputChannel("New Relic One");
      output.append(stdout);
      output.show();
      const files = await vscode.workspace.findFiles(
        "**/catalog/*",
        "node_modules",
        10
      );

      files.forEach((fileUri) => {
        vscode.workspace.openTextDocument(fileUri).then((document) => {
          vscode.window.showTextDocument(document, vscode.ViewColumn.Beside);
        });
      });
    }
  );
};

const publishNerdpack = (channel: string) => {
  const path = getPath();
  cp.exec(cliCommands.publishNerdpack(channel), { cwd: path }, handleResponse);
};

const deployNerdpack = (channel: string) => {
  const path = getPath();
  cp.exec(cliCommands.deployNerdpack(channel), { cwd: path }, handleResponse);
};

const subscribeNerdpack = (channel: string) => {
  const path = getPath();
  cp.exec(
    cliCommands.subscribeNerdpack(channel),
    { cwd: path },
    handleResponse
  );
};

const unsubscribeNerdpack = () => {
  const path = getPath();
  cp.exec(cliCommands.unsubscribeNerdpack(), { cwd: path }, handleResponse);
};

const nr1RunNerdpack = () => {
  var terminal = vscode.window.createTerminal("Nerdpack serve");
  terminal.show();
  terminal.sendText("nr1 nerdpack:serve");
  const uri = vscode.Uri.parse(
    "https://staging-one.newrelic.com?nerdpacks=local"
  );
  vscode.env.openExternal(uri);
};

// Possible helper function
const pickChannel = async () => {
  const channel = await vscode.window.showQuickPick(["STABLE", "BETA", "DEV"]);
  if (!channel) {
    vscode.window.showErrorMessage("A channel is required");
    throw new Error("A channel is required");
  }
  return channel;
};
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vs-code-test" is now active!');

  var type = "exampleProvider";
  vscode.tasks.registerTaskProvider(type, {
    provideTasks(token?: vscode.CancellationToken) {
      var execution = new vscode.ShellExecution('echo "Hello World"');
      console.log("providing");

      return [
        new vscode.Task(
          { type: type },
          vscode.TaskScope.Global,
          "Build",
          "vs-code-test",
          execution
        ),
      ];
    },
    resolveTask(task: vscode.Task, token?: vscode.CancellationToken) {
      console.log("resolving?");
      return task;
    },
  });

  context.subscriptions.push(
    vscode.commands.registerCommand("vs-code-test.createCatalog", async () => {
      nr1CreateCatalog();
    }),

    vscode.commands.registerCommand("vs-code-test.catalogInfo", () => {
      const path = getPath();
      cp.exec(cliCommands.catalogInfo(), { cwd: path }, handleResponse);
    }),

    vscode.commands.registerCommand("vs-code-test.catalogSubmit", () => {
      const path = getPath();
      cp.exec(cliCommands.catalogSubmit(), { cwd: path }, handleResponse);
    }),

    vscode.commands.registerCommand("vs-code-test.runNerdpack", async () => {
      nr1RunNerdpack();
    }),

    vscode.commands.registerCommand("vs-code-test.createNerdpack", async () => {
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

  vscode.commands.registerCommand("vs-code-test.publishNerdpack", async () => {
    const channel = await pickChannel();
    publishNerdpack(channel);
  });

  vscode.commands.registerCommand("vs-code-test.deployNerdpack", async () => {
    const channel = await pickChannel();
    deployNerdpack(channel);
  });

  vscode.commands.registerCommand(
    "vs-code-test.subscribeNerdpack",
    async () => {
      const channel = await pickChannel();
      subscribeNerdpack(channel);
    }
  );

  vscode.commands.registerCommand(
    "vs-code-test.unsubscribeNerdpack",
    async () => {
      unsubscribeNerdpack();
    }
  );

  vscode.commands.registerCommand("vs-code-test.selectProfile", async () => {
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
    const path = vscode.workspace.rootPath;
    cp.exec(cliCommands.selectProfile(profileName), { cwd: path }, () => {
      vscode.window.showInformationMessage(
        `Default profile updated to ${profileName}`
      );
    });
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
