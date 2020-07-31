export const createNerdpack = (nerdpackName: string) =>
  `nr1 create -t nerdpack -n ${nerdpackName}`;

export const createCatalog = () => "nr1 create --type='catalog'";

export const publishNerdpack = (channel: string) =>
  `nr1 nerdpack:publish -c ${channel}`;

export const deployNerdpack = (channel: string) =>
  `nr1 nerdpack:deploy -c ${channel}`;
