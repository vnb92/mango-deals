const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

const paths = {
  root: path.resolve(__dirname, 'src/client/src'),
  entry: path.resolve(__dirname, 'src/client/src/index.tsx'),
  sw: path.resolve(__dirname, 'src/client/src/sw/sw.ts'),
  output: path.resolve(__dirname, 'dist'),
  tsConfig: path.resolve(__dirname, 'src/client/tsconfig.json'),
  htmlTemplate: path.resolve(__dirname, 'src/client/src/index.html'),
  static: path.resolve(__dirname, 'src/client/static')
}

module.exports = env => {
  const isDev = env.mode === 'development'

  return ({
    mode: env.mode,
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.css', '.svg'],
      alias: {
        '@': paths.root
      }
    },
    entry: {
      client: paths.entry,
      sw: paths.sw
    },
    output: {
      path: paths.output,
      chunkFilename: isDev ? '[name].js' : '[name].[hash].js'
    },
    devServer: {
      proxy: {
        '/api': 'http://localhost:3000',
      },
      static: {
        directory: paths.static,
      },
      compress: true,
      port: 4000,
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: paths.tsConfig 
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
      new ForkTsCheckerWebpackPlugin({ typescript:{ configFile: paths.tsConfig }}),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.htmlTemplate,
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[hash].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/client/static/manifest.json', to: '/dist/manifest.json' },
        ],
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
