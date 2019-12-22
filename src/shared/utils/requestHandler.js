// eslint-disable import/prefer-default-export

import axios from 'axios';

/**
 * Helper to parse request status and return data
 *
 * @param response (response of request)
 *
 * @return {response.data}
*/
export const parseRequest = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response;
};

/**
 * Helper to check status of request
 *
 * @param response (response of request)
 *
 * @return {response}
*/
export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
};

/**
 * Helper to send request for GH API
 *
 * @param method (method request)
 * @param endpoint (endpoint to request)
 * @param data (data params)
 * @param params (query strings)
 * @param headers (headers)
 *
 * @return {response}
*/
export const doRequest = (
  {
    method,
    endpoint,
    data = {},
    params = {},
    headers = {},
  },
) => {
  const url = `https://api.github.com/${endpoint}`;

  try {
    return axios({
      method,
      url,
      data,
      params,
      headers,
    })
      .then(checkStatus)
      .then(parseRequest);

  } catch (err) {
    throw new Error(err);
  }
};
