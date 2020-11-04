import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL_BASE;

const instance = axios.create();

function beforeRequest (config: any) {
  return config;
}

function beforeResponse (response: any) {
  return response;
}

function beforeError (error: any) {
  console.log({ error });

  throw error;
}

instance.interceptors.request.use(
  beforeRequest
);

instance.interceptors.response.use(
  beforeResponse,
  beforeError
);

export default instance;
