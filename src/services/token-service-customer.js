import config from "../config";

const tokenServiceCustomer = {
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
  saveCustomerId(customer_id) {
    return window.localStorage.setItem("customer_id", customer_id);
  },
  getCustomerId(customer_id) {
    return window.localStorage.getItem("customer_id", customer_id);
  },
};

export default tokenServiceCustomer;
