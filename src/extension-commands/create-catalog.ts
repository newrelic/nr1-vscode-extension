import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";
import handleCreateCatalogResponse from "../response-handlers/create-catalog";

const createCatalog = () => {
  runCommand(cliCommands.createCatalog(), handleCreateCatalogResponse);
};

export default createCatalog;
