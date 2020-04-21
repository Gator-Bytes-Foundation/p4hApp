const glob = require("glob");
const path = require("path");
const webpack = require("webpack");

// Get local IP Address
var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === "IPv4" && !address.internal) {
      addresses.push(address.address);
    }
  }
}

ip_address = addresses[0];

// take debug mode from the environment
const debug = process.env.NODE_ENV !== "production";
let publicHost;

if (ip_address != undefined) {
  publicHost = debug ? "http://" + ip_address + ":2992" : "";
} else {
  publicHost = debug ? "http://0.0.0.0:2992" : "";
}

const basenameWithoutExt = (filePath) => path.basename(filePath).split(".")[0];

const entries = glob.sync(path.resolve(".", "src/Page/*.*")).reduce(
  (acc, entryPath) => ({
    ...acc,
    [basenameWithoutExt(entryPath)]: entryPath,
  }),
  { main: path.resolve(".", "src/main.js") }
);

module.exports = {
  context: __dirname,
  entry: entries,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../app/static/build"),
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
