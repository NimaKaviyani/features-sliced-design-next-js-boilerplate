import { apiInstance } from "@shared/api/eoap";
import { authAddresses } from "@shared/constants/relative-url";
import { LoginRequest } from "./models";

export const login = (requestBody: LoginRequest) => {
  return apiInstance.post(authAddresses.login, requestBody);
};
