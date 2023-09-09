import axios, { AxiosInstance } from "axios";
import { API_BASE_URL } from "@shared/config";
import toastAlert from "@shared/helpers/toast";
import { log } from "@shared/helpers";
import cookie from "@shared/helpers/cookie";
import { REFRESH_TOKEN, USER_TOKEN } from "@shared/helpers/cookie/types";
import { OptionsTypes } from "@shared/api/ens/model";
import { authAddresses } from "@shared/constants/relative-url";

const base = (authorization: boolean = false): AxiosInstance => {
  const options: OptionsTypes = {
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
  };

  // todo: should change this by zustand persist.
  if (authorization) options.headers["Authorization"] = "Bearer " + cookie.getCookie(USER_TOKEN) ?? "";

  const instance = axios.create(options);

  instance.interceptors.request.use(
    function (config) {
      // Do something before the request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  const responseInterceptor = instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response) {
        if (error.response.status === 401) {
          const refreshToken = cookie.getCookie(REFRESH_TOKEN);
          console.log({ refreshToken });
          if (!authorization) return;
          if (!refreshToken) {
            // todo: delete user from storage
            return;
          }
          options.headers["Content-Type"] = "application/json";
          instance.interceptors.response.eject(responseInterceptor);
          return instance
            .post(authAddresses.refreshToken, { refreshToken }, options)
            .then(response => {
              log("Refresh Response", response);
              const { data } = response;
              // todo: should change this by zustand persis
              cookie.setCookie(USER_TOKEN, data.accessToken, undefined, data.accessTokenExpireTime);
              error.response.config.headers["Authorization"] = "Bearer " + data.accessToken;
              return axios(error.response.config);
            })
            .catch(error => {
              log("Check Refresh Error:", error.response);
              // todo: delete user from storage by zustand
              return;
            });
        }
        if (error.response.status >= 500 && error.response.status < 600)
          toastAlert(error.response.data?.message ?? error.response.statusText, "error");
        if (error.response.status >= 400 && error.response.status < 500)
          toastAlert(error.response.data?.message ?? error.response.statusText, "warning");
        if (error.response.status >= 300 && error.response.status < 400)
          toastAlert(error.response.data?.message ?? error.response.statusText, "info");
        log(error.response);
        log(error.response.data);
        log(error.response.status);
        log(error.response.statusText);
        log(error.response.headers);
      } /*else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error);
    console.log(error.request);
  }*/ else {
        toastAlert(error.message, "error");
        log("Error:", error.message);
      }
    }
  );

  return instance;
};

export default base;
