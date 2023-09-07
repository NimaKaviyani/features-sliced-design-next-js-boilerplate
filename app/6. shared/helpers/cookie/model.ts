export interface Cookie {
  value: string;
  days: number;
  expires?: string;
}

export interface Cookies {
  [key: string]: Cookie;
}

export type SetCookieFunction = (name: string, value: string, days?: number, expires?: string) => void;
export type SetCookiesFunction = (cookies: Cookies) => void;
export type GetCookieFunction = (name: string) => string | null;
export type DeleteCookieFunction = (name: string) => void;
export type DeleteCookiesFunction = (names: string[]) => void;
