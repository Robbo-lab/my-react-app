
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicUrl = process.env.PUBLIC_URL || "/";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",            // better caching
    path: path.resolve(__dirname, "dist"),
    clean: true,                                     // clean dist on build
    publicPath: publicUrl                            // critical for GH Pages
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // helps SPA routing in dev
  },
};


// Then run this
// npm install --save-dev style-loader css-loader
// npm run build
// npm start
// Check dist folder
