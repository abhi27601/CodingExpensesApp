const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { devServer } = require("./webpack.prod");
// html loader will require all the assets in commonjs.accordion
//file-loader read the assets i.e it ll actually execute the img or svgs present in js and emits the file in the specified path.

module.exports = {
  entry: {
    //app:"./src/destructuring.js"
    app:"./src/app.js"
    //app: "./src/app-redux.js"
   // vendor: "./src/vendor.js"
   //app:"./src/redux-expensify.js"
   //app:"./src/hoc.js"
  },
  module: {
    rules: [
      {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer:{
    contentBase: path.resolve(__dirname, 'dist'),
    port:9000,
    historyApiFallback: true
  }
};
