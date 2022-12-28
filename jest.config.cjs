module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {

    // para que jest entienda css
    "\\.(css|sass)$": "identity-obj-proxy",
    
    // para que jest entienda svg
    "^.+\\.svg$": "jest-svg-transformer",
  },

};
