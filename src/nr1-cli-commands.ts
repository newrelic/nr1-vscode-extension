export const createNerdpack = (nerdpackName: string) =>
  `nr1 create -t nerdpack -n ${nerdpackName}`;

export const createCatalog = () => "nr1 create --type='catalog'";

export const publishNerdpack = (channel: string) =>
  `nr1 nerdpack:publish -c ${channel}`;

export const deployNerdpack = (channel: string) =>
  `nr1 nerdpack:deploy -c ${channel}`;

export const subscribeNerdpack = (channel: string) =>
  `nr1 nerdpack:subscribe -c ${channel}`;

export const unsubscribeNerdpack = () => "nr1 nerdpack:unsubscribe";

export const catalogInfo = () => "nr1 catalog:info";

export const catalogSubmit = () => "nr1 catalog:submit";

export const selectProfile = (profileName: string | undefined) =>
  `nr1 profiles:default -n ${profileName?.replace(" (current)", "")}`;
