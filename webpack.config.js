const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // tells us where the app starts and where to bundle the files
  mode: "development", // tells webpack to know im workin in development mode
  module: {
    // define how js modules are transformed
    rules: [
      // tells which modules that are included
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/, // it will match anything that is not in node_modules
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/, // defines how we want to  process CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }, // the extensions Webpack will resolve. Here it's possible to import modules without adding the extensions for them
  output: {
    // where Webpack should put the transpiled and boundled code
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/", // the directory the boundle should go in and where the webpack server should find the files
    filename: "bundle.js",
  },
  devServer: {
    // this configures the webpack-dev-server and where the static files are
    contentBase: path.join(__dirname, "/"),
    port: 3000, // which port the server should run on
    publicPath: "http://localhost:3000/dist/",
    watchContentBase: true,
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ uglifyOptions: { mangle: { keep_fnames: true } } }),
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
