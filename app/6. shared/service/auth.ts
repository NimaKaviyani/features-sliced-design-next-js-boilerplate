import { postRequest } from "@shared/api/ens";
import { authAddresses } from "@shared/constants/relative-url";
import { LoginRequest } from "./model";

export const login = (requestBody: LoginRequest): unknown => {
  return postRequest(authAddresses.login, requestBody);
};
