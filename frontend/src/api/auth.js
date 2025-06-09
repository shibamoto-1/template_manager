import client from "./client";

export const signUp = (params) => {
  return client.post("/auth", params);
};

export const signIn = (user_data) => {
  return client.post("/auth/sign_in", user_data);
};

export const signOut = () => {
  return client.delete("/auth/sign_out");
};

export const validateUser = () => {
  return client.get("/auth/validate_token");
};

export const guestLogin = () => {
  return client.post("/guest_login");
}
