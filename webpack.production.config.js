var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var HappyPack = require('happypack');

var paths = {
  app: path.resolve(__dirname, 'static'),
  build: path.resolve(__dirname, 'build'),
}

module.exports = {
  entry: {
    app: "./src/main.js",
    vender: ['react', 'react-dom', 'redux', 'react-redux', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, 'build'),//打包后的文件存放的地方
    //filename: "bundle.js",//打包后输出文件的文件名
    filename: 'js/[name].[hash:6].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      },
      {
        test:/\.scss$/,
        loader:'happypack/loader?id=scss'
      },
      {
        test: /\.(mp4)$/,
        loader: 'file'
        // loader: 'url-loader'
        // loader: 'url-loader?limit=100000'
        // loader: 'file-loader'
        // loader: 'file-loader?name=videos/[name].[ext]'
      },
      {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192'
　　　 }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body',
      minify: {
        minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    }),
    new HappyPack({
      id: 'scss',
      loaders: ['style!css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass'],
    }),
    new CopyWebpackPlugin([
      {
        from: paths.app + '/favicon.ico',
        to: paths.build + '/static/favicon.ico'
      }
    ]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("css/[name].[hash:8].css")
  ],

}
