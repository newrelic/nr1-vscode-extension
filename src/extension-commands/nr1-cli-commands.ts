export const createNerdpack = (nerdpackName: string) =>
  `nr1 create -t nerdpack -n ${nerdpackName}`;

export const createCatalog = () => "nr1 create --type='catalog'";

export const createNerdlet = (nerdletName: string) =>
  `nr1 create -t nerdlet -n ${nerdletName}`;

export const createLauncher = (launcherName: string) =>
  `nr1 create -t launcher -n ${launcherName}`;

export const createVisualization = (visualizationName: string) =>
  `nr1 create -t visualization -n ${visualizationName}`;

export const publishNerdpack = (channel: string) =>
  `nr1 nerdpack:publish -t ${channel}`;

export const deployNerdpack = (channel: string) =>
  `nr1 nerdpack:deploy -t ${channel}`;

export const undeployNerdpack = (channel: string) =>
  `nr1 nerdpack:undeploy -t ${channel}`;

export const subscribeNerdpack = (channel: string) =>
  `nr1 nerdpack:subscribe -c ${channel}`;

export const unsubscribeNerdpack = () => "nr1 nerdpack:unsubscribe";

export const catalogInfo = () => "nr1 catalog:info";

export const catalogSubmit = () => "nr1 catalog:submit";

export const setProfile = (profileName: string) =>
  `nr1 profiles:default -n ${profileName?.replace(" (current)", "")}`;

export const generateUuid = () => "nr1 nerdpack:uuid -g -f";

export const listSubscriptions = () => "nr1 subscription:list";
