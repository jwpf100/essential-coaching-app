const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/javascript/index-temp.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
      chunkFilename: '[id].[hash]',
  }),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: { sourceMap: true }, },
          'resolve-url-loader',
          { loader: 'sass-loader', options: { sourceMap: true }, },
        ],
      }, 
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: { limit: 1000, name: 'fonts/[name].[ext]', },
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        include: path.join(__dirname, 'images/'),
        loader: "file-loader"
      },
    ],
  },
}