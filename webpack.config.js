const path = require("path");
module.exports = {
  entry: "/src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", "@babel/env"],
            // plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_module/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
