import { REGIONS } from "./regions";

export const DEVELOPER_WEBSITE_URL = "https://developer.newrelic.com";

export const DEVELOPER_WEBSITE_SEARCH_PARAM = "/?q=";

export const NR_ONE_US_URL = "https://one.newrelic.com";

export const NR_ONE_EU_URL = "https://one.eu.newrelic.com";

const DEVELOPER_CENTER_PATH = "/launcher/developer-center.launcher";

export const NR_ONE_LOCAL_QUERY_PARAM = "?nerdpacks=local";

export function getDeveloperCenterUrl(region: string) {
  const baseUrl = region === REGIONS.EU ? NR_ONE_EU_URL : NR_ONE_US_URL;
  return `${baseUrl}${DEVELOPER_CENTER_PATH}`;
}
