const debug = process.env.NODE_ENV !== "production";
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'app');
const PUB_DIR = path.resolve(__dirname, 'public');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry: [
    APP_DIR + '/index.js',
    PUB_DIR + '/less/main.less'
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR + '/app',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader:  'babel-loader',
        query: { presets: ['es2015', 'react'], }
      },
      {
        test: /\.less$/,
        loader:	'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8000
  }
}
