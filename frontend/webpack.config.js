const glob = require("glob");
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

const isProduction = process.env.NODE_ENV === "production";

const basenameWithoutExt = (filePath) => path.basename(filePath).split(".")[0];

const entries = glob.sync(path.resolve(".", "src/js/entry/*.js")).reduce(
  (acc, entryPath) => ({
    ...acc,
    [basenameWithoutExt(entryPath)]: entryPath,
  }),
  { main: path.resolve(".", "src/js/main.js") }
);

const outputPath = path.resolve(__dirname, "../app/static");
const assetPath = path.resolve(__dirname, "assets");

module.exports = {
  context: __dirname,
  entry: entries,
  output: {
    filename: "js/[name].js",
    path: outputPath,
    publicPath: isProduction ?  "/static/" : "/",
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(woff2?|svg|otf|eot|ttf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: assetPath, to: outputPath }]),
    new ManifestPlugin({ publicPath: "http://localhost:9000/" }),
  ],
  devServer: {
    contentBase: outputPath,
    compress: true,
    port: 9000,
  },
};
