var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path    = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HappyPack = require('happypack');

const paths = {
  app: path.join(__dirname, 'static'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  devtool:'eval-source-map',//配置生成Source Maps, 选择合适的选项
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    //filename: "bundle.js",//打包后输出文件的文件名
    filename: 'js/[name].[hash:6].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js',
  },

  module: {//在配置文件里添加json loader
  	loaders: [
  		{
  			test : /\.json$/,
  			loader:"json"
  		},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'//添加对样式表的处理
      },
      {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192'
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
        test:/\.scss$/,
        loader:'happypack/loader?id=scss'
      }
  	]
  },
  postcss: [
    require('autoprefixer')//调用autoprefixer插件
  ],
  
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new HappyPack({
      id: 'scss',
      loaders: ['style!css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!sass'],
    })
  ],

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    stats: 'errors-only',
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: "8088",
    hot :true
  } 
}
