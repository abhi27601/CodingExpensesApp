const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// htmlwebpackplugin - is used to create a new html by adding the script tag automatically and gandle content hash ,
// for caching control.
//optimizecssassetplugin will minimize css,
//terserplugin will minimize js its very similar to uglify
//htmlwebpackplugin minimize option for minification of html as well
// webpack merge is used to extend this prod config with common config 
// Here it will create dist folder with .md5 hash creation in between name.
// new OptimizeCssAssetsPlugin(),

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "public","dist"),
    publicPath: '/'
  },
  optimization: {
    minimize:true,
    minimizer: [
      new CssMinimizerPlugin({
        sourceMap:true,
        cache:false
      }),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"}),
    new CleanWebpackPlugin(),
    new CssMinimizerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files // make link files and attach.
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    
    ]
  }, 
});
