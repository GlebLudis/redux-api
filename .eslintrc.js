module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-plusplus": 0,
    "no-alert": "off",
    "no-console": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
    "no-return-assign": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-var-requires": 0,
  },
  plugins: ["jest", "@typescript-eslint"],
};
