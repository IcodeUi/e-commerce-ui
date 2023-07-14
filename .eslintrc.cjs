// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  settings: {
    "import/resolver": {
      foo: { someConfig: value },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },

  overrides: [
    {
      files: ["bin/*.js", "lib/*.js"],
      excludedFiles: "*.test.js",
      rules: {
        quotes: ["error", "single"],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
