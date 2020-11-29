const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

//style loader is used to write style tag ,attach style into DOM
// here it will not create dist folder as its written with webpack-dev-server
/*process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'test'){
console.log(process.env.NODE_ENV)
}
else {
  console.log(process.env.NODE_ENV);
}*/


module.exports = merge(common,  {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname,"public","dist"),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader", //3. Inject styles into DOM // here css is attahced from js code i.e commonjs code.
          {
            loader:'css-loader',
          options:{
            sourceMap:true
            }
          }, //2. Turns css into commonjs
          {
            loader:'sass-loader',
          options:{
            sourceMap:true
            }
          } //1. Turns sass into css
        ]
      }
    ]
  }
})

