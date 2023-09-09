import { IS_DEVELOPMENT } from "@shared/config";

export const log = (...message: unknown[]): void | false => IS_DEVELOPMENT && console.log(...message);
