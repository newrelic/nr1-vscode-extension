// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import { DEVELOPER_WEBSITE_URL } from "../constants/urls";

const openDevDocs = (queryParam?: string) => {
  const url = `${DEVELOPER_WEBSITE_URL}${queryParam ?? ''}`;
  const uri = vscode.Uri.parse(url, true);
  vscode.env.openExternal(uri);
};

export default openDevDocs;
