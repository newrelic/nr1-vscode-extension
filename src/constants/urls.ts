export const DEVELOPER_WEBSITE_URL = "https://developer.newrelic.com";

export const NR_ONE_US_URL = "https://one.newrelic.com";

export const NR_ONE_EU_URL = "https://one.eu.newrelic.com";

const DEVELOPER_CENTER_PATH = "/launcher/developer-center.launcher";

export function getDeveloperCenterUrl(region: Region) {
  const baseUrl = region === Region.EU ? NR_ONE_EU_URL : NR_ONE_US_URL;
  return `${baseUrl}${DEVELOPER_CENTER_PATH}`;
}
