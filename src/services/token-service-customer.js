import config from "../config";

export default {
  saveAuthTokenSite(token) {
    window.localStorage.setItem(config.SITE_TOKEN_KEY, token);
  },
  getAuthTokenSite() {
    return window.localStorage.getItem(config.SITE_TOKEN_KEY);
  },
  hasAuthTokenSite() {
    return !!this.getAuthTokenSite();
  },
  clearAuthTokenSite() {
    window.localStorage.removeItem(config.SITE_TOKEN_KEY);
  },
};
