import axios from "axios";
import queryString from "query-string";
const apiClient = axios.create({
  baseURL: "https://travel-review-server-production.up.railway.app/",
  timeout: 10000,
  paramsSerializer: (params) => queryString.stringify(params),
});
apiClient.interceptors.request.use(async (config: any) => {
  config.headers = {
    Authorization: "",
    Accept: "application/json",
    ...config.headers,
  };
  config.data;
  return config;
});
apiClient.interceptors.response.use(
  (response) => {
    if (response.data && response.status.toString().startsWith("2")) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  (error) => {
    console.log("API ERROR", error);
    return Promise.reject(error);
  }
);
export default apiClient;
