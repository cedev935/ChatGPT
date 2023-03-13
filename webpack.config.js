const path = require("path");

module.exports = {
  entry: "./src/entry",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
  respolve: {
    fallback: {
      path: false,
      fs: false,
    },
  },
};
