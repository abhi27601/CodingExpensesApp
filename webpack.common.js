const path = require("path");
const webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// html loader will require all the assets in commonjs.accordion
//file-loader read the assets i.e it ll actually execute the img or svgs present in js and emits the file in the specified path.
console.log(__dirname);
//process.env.NODE_ENV = process.env.NODE_ENV;
if(process.env.NODE_ENV === 'test'){
  console.log(process.env.NODE_ENV)
  require('dotenv').config({path: '.env.test'})
}else if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV == 'production'){
  console.log(process.env.NODE_ENV)
  require('dotenv').config({path: '.env.development'})
}


module.exports = {
  entry: {
    polyfill:'@babel/polyfill',
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
            outputPath: "imgs",
         // publicPath: 'images',
          //outputPath: 'assets/img',
          //esModule: false
          }
        }
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID),
      'process.env.FIREBASE_MEASUREMENT_ID':JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),

    }),
    new CopyWebpackPlugin({
      patterns:[
      {
          //Note:- No wildcard is specified hence will copy all files and folders
          from: 'src/images', //Will resolve to RepoDir/src/assets 
          to: 'images' //Copies all files from above dest to dist/assets
      },
    
  ]
})
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer:{
    contentBase: path.join(__dirname, 'public','dist'),
    port:9000,
    publicPath: '/',
    historyApiFallback: true
  }
};
