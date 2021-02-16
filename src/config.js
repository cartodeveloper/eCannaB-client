module.exports = {
  PORT: process.env.PORT || 8080,
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:8000/api",
  TOKEN_KEY: process.env.TOKEN_KEY || "ecannab-token",
  SITE_TOKEN_KEY: process.env.SITE_TOKEN_KEY || "ecannab-subdomain-token",
};
