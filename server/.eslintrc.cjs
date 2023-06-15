module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ["eslint:recommended", "plugin:node/recommended"],
  rules: {
    "no-unused-vars": "warn",
  },
};