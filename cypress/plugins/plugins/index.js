module.exports = (on, config) => {
  require("@cypress/webpack-preprocessor")(on, config);
  return config;
};
