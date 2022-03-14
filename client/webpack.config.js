const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = env => {
  const isDev = env.mode === 'development'

  return ({
    mode: env.mode,
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.css', '.svg'],
      alias: {
        '@': path.resolve(__dirname, 'src')
    }
    },
    entry: {
      index: './src/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: isDev ? '[name].js' : '[name].[hash].js'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 4000,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev,
                modules: {
                  localIdentName: '[name]-[local]-[hash:base64:5]'
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-import',
                    'postcss-custom-media',
                    'postcss-nested',
                    'postcss-custom-properties',
                  ]
                }
              }
            }
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-react']
              }
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[hash].css',
      }),
      new webpack.EnvironmentPlugin({
        DEV: isDev,
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  })
}
