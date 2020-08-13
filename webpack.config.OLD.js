const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: './index.js'
    },
    mode: 'production',
    module: {
      rules: [
        /*
        {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: 'file-loader',
        }
        */
       /* {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }*/
    ]
    },
    /* 
    ///////////////////////////////////////////////////////////
    CURRENTLY DON't NEED THIS.  IF I WANT TO ONLY LOAD PARTS OF BOOTSTRAP THEN I SHOULD REVIEW - https://kimsereyblog.blogspot.com/2018/06/bundle-bootstrap-using-webpack.html
    ///////////////////////////////////////////////////////////
    */
    plugins: [
      /*
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Util: 'exports-loader?Util!bootstrap/js/dist/util'
      }),
      
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      })
      */
    ], 
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true, 
          sourceMap: true
        }),
/*        new OptimizeCSSAssetsPlugin({})*/
      ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}