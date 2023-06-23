const path = require("path");

module.exports = {
  entry: "./client/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      },
      {
        test: /\.(png|jpg|cur|gif|eot|ttf|woff|woff2)$/,
        use: [ "url-loader" ]
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
