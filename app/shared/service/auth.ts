import { apiInstance } from "@shared/api/ens";
import { authAddresses } from "@shared/constants/relative-url";
import { LoginRequest } from "./models";

export const login = (requestBody: LoginRequest): unknown => {
  return apiInstance.post(authAddresses.login, requestBody);
};
