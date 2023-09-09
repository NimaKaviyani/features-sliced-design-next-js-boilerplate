import encoderDecoder from "@shared/helpers/encoder-decoder";
import {
  DeleteCookieFunction,
  DeleteCookiesFunction,
  GetCookieFunction,
  SetCookieFunction,
  SetCookiesFunction
} from "./model";

const isBrowser = typeof window !== "undefined";

class CookieManager {
  private static instance: CookieManager;

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  setCookie: SetCookieFunction = (name, value, days = 7, expires?) => {
    if (isBrowser) {
      const date = expires ? new Date(expires) : new Date();
      if (!expires) date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expiresDate = date.toUTCString();
      document.cookie = `${name}=${encoderDecoder.encode(value)};expires=${expiresDate};path=/`;
    }
  };

  setCookies: SetCookiesFunction = cookies => {
    if (isBrowser) {
      Object.keys(cookies).forEach(name => {
        const { value, days = 7, expires = undefined } = cookies[name];
        const date = expires ? new Date(expires) : new Date();
        if (!expires) date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expiresDate = date.toUTCString();
        document.cookie = `${name}=${encoderDecoder.encode(value)};expires=${expiresDate};path=/`;
      });
    }
  };

  getCookie: GetCookieFunction = name => {
    if (!isBrowser) return null;
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return encoderDecoder.decode(cookie.substring(name.length + 1));
      }
    }
    return null;
  };

  deleteCookie: DeleteCookieFunction = name => {
    if (isBrowser) document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
  };

  deleteCookies: DeleteCookiesFunction = names => {
    names.forEach(name => {
      this.deleteCookie(name);
    });
  };
}

export default CookieManager;
