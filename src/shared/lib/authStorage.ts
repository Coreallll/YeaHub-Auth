export const LS_ACCESS_TOKEN_KEY = "access_token";

export const getFromLS = (key: string) => {
  return localStorage.getItem(key);
};

export const setToLS = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeFromLS = (key: string) => {
  localStorage.removeItem(key);
};
