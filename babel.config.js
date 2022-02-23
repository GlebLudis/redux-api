module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { ie: "11", node: "12" } }],
    "@babel/preset-typescript",
  ],
};
