import httpClient from "./httpClient.service";

export const getAllUsers = () => {
  return httpClient
  .get("users")
  .then((response) => response.data.data);
};
