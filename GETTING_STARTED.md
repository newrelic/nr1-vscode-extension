# Local development

## Prerequisites

- The [NR1 CLI](https://developer.newrelic.com/explore-docs/nr1-cli) must be installed.

## To run the extension

- Clone this repo.
- Open `nr1.code-workspace` in VSCode.
- Press F5 to launch the extension host.

`Note:` After launching the extension host, you need to have a "blank slate" to create a new nerdpack.

## Running commands provided by the extension

Commands provided by the extension can be run use the VSCode command pallette `(SHIFT + CMD + P)`.

## Adding a new command

### To add new command

- In the `extension.ts` file, there is an activate function. This is the "hook" that gets called to connect the commands.
- In the `context.subscriptions.push`, add a new `vscode.commands.registerCommand()` function.
- The first argument in the function is an "id" for the command which is the extension's id & the id for the command: `<extension-id>.<command-id>`. ex: `nr1.undeployNerdpack`
- The second argument is the callback function for that command.

### Hook up the new command

- In the package.json, add the command in the `activationEvents` array.
- And add under the `contributes` key, in the `commands` array as an object with the command id and name.

ex:

```json
{
  command: "nr1.undeployNerdpack",
  title: "Nerdpack: undeploy"
}
```
