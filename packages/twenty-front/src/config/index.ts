const PREVIEW_API_BASE_URL =
  'https://twenty-server-homologacao.up.railway.app';

export const REACT_APP_SERVER_BASE_URL =
  window._env_?.REACT_APP_SERVER_BASE_URL || PREVIEW_API_BASE_URL;
