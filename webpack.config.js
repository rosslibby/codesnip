const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: 'src/index.ts',
  output: { path: __dirname + '/dist' },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.ts'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: __dirname + '/src/index.html' }),
  ],
  devServer: {
    static: { directory: __dirname + '/dist' },
    compress: true,
    port: 3000,
  },
};

