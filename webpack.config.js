var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function (env, argv) {
  var config = {
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: env.production ? '[name].[chunkhash:8].js' : '[name].js',
      publicPath: '/'
    },
    mode: env.production ? 'production' : 'development',
    devServer: {
      disableHostCheck: true,
      historyApiFallback: true,
      open: true
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        /* 如果路径以 ~ 开头，其后的部分将会被看作模块依赖。
        *  这意味着你可以用该特性来引用一个 Node 依赖中的资源：
        *  <img src="~some-npm-package/foo.png"> 
        * */
        //'assets': path.resolve(__dirname, 'images') 
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/, 
          exclude: /node_modules/, 
          loader: 'vue-loader' 
        },
        {
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: 'babel-loader' 
        },
        {
          test: /\.css$/,
          use: [
            env.production
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-px2rem')(),
                  require('postcss-preset-env')()
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        },

      ]
    },
    plugins : [
      new CleanWebpackPlugin(['./dist']),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'main.css'
      })
    ]
  }

  if (!env.production) config.devtool = 'cheap-module-eval-source-map'

  return config
}
