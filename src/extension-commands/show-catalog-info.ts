import * as cliCommands from "./nr1-cli-commands";
import runCommand from "../utils/run-command";

const showCatalogInfo = () => runCommand(cliCommands.catalogInfo());

export default showCatalogInfo;
