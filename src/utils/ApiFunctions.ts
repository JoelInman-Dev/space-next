/**
 * Get the full api url for the given endpoint
 *
 * @param endpoint
 * @returns
 */
export const getApiUrl = (endpoint: string) => {
  return process.env.DEVELOPMENT_API_URL + "/" + endpoint;
};
