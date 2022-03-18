const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

const paths = {
  root: path.resolve(__dirname, 'src/backend/src'),
  entry: path.resolve(__dirname, 'src/backend/src/server.ts'),
  output: path.resolve(__dirname, 'dist'),
  tsConfig: path.resolve(__dirname, 'src/backend/tsconfig.json'),
}

module.exports = env => {
  const isDev = env.mode === 'development'

  return ({
    mode: env.mode,
    target: 'node',
    resolve: {
      extensions: ['.js', '.ts'],
      alias: {
        '@': paths.root
    }
    },
    entry: {
      server: paths.entry,
    },
    output: {
      path: paths.output,
      chunkFilename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: paths.tsConfig
            }
          }
        }
      ]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({ typescript: { configFile: paths.tsConfig} }),
      new webpack.EnvironmentPlugin({
        DEV: isDev,
      }),
    ]
  })
}
