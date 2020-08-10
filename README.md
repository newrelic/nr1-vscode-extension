[![Community Project header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Community_Project.png)](https://opensource.newrelic.com/oss-category/#community-project)

# New Relic VS Code extension

Build and deploy New Relic apps directly from VS Code

![VS Code using NR1 extension](assets/nr1-vscode-ext.gif)

## Table of contents

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Prerequisites](#Prerequisites)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Getting started](#Getting-started)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Features](#Features)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Cli commands](#Cli-commands)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Snippets](#Snippets)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Contributing](#Contributing)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[How to develop locally and contribute changes](#How-to-develop-locally-and-contribute-changes)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[License](#License)

## Prerequisites

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a [free account](https://newrelic.com/signup)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get your [API key](https://one.newrelic.com/launcher/developer-center.launcher)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Install the `nr1` CLI [here](https://one.newrelic.com/launcher/developer-center.launcher)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note: Nerdpack will be created under the account associated with the current default profile

## Getting started

1. Install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com).
2. Open the VS Code command palette (`Ctrl+Shift+P` in Windows/Linux or `Cmd+Shift+P` in macOS).
3. Enter "Nerdpack" or "New Relic" to get a list of the available commands.
4. Select `New Relic Profile: select default` or `Nerdpack: create a nerdpack` to get started!

## Features

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These are the features currently supported by this extension.

### CLI commands

| Name                                | Description                                                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `New Relic Profile: select default` | Choos your default profile [ℹ️](https://developer.newrelic.com/explore-docs/nr1-common#nr1-profiles)                                                       |
| `Nerdpack: generate uuid`           | Assign a new UUID to your Nerdpack [ℹ️](https://developer.newrelic.com/explore-docs/nr1-nerdpack#nr1-nerdpackuuid)                                         |
| `Nerdpack: create a nerdpack`       | Create a new component from a Nerdpack template [ℹ️](https://developer.newrelic.com/explore-docs/nr1-common#nr1-create)                                    |
| `Nerdpack: create a nerdlet`        | Creates a new component from a Nerdlet template [ℹ️](https://developer.newrelic.com/explore-docs/nr1-common#nr1-create)                                    |
| `Nerdpack: create a launcher`       | Create a new component from a Launcher template [ℹ️](https://developer.newrelic.com/explore-docs/nr1-common#nr1-create)                                    |
| `Nerdpack: run local development`   | Launch a local server to test your Nerdpack on the New Relic One platform [ℹ️](https://developer.newrelic.com/explore-docs/nr1-nerdpack#nr1-nerdpackserve) |

### Snippets

| Trigger                         | Content                                                 |
| ------------------------------- | ------------------------------------------------------- |
| `nerdgraph->`                   | nr1 NerdGraphQuery component                            |
| `button->`                      | nr1 Button component                                    |
| `reporting events by account->` | `gql` query for reporting events by account             |
| `pageview tables->`             | nr1 TableChart component with PageView count NRQL query |

## Contributing

This project adheres to the Twilio Labs [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md). Please read before contributing.

### How to develop locally and contribute changes

1. Fork this repository.
2. Open project in VSCode.
3. Hit `F5` to compile and launch the extension in debug mode. This will open a new VSCode window in which you can open the Command Palette and try out the commands.
4. Make your changes in a new branch.
5. Commit and push your changes.
6. Open a Pull Request with a description of the changes. Feel free to include anything that could make our review easier _(screenshots, demo gifs, etc.)_

## License

This project is distributed under the [Apache 2 license](LICENSE).

## Known Issues

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Report issues on our [GitHub repository](https://github.com/newrelic/nr1-vscode-extension/issues).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We also encourage pull requests if you want to help make the extension even better.
