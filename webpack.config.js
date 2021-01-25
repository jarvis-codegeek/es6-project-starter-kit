
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //ES5 way

module.exports = {
  entry: ["./app/main.js"],
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./js/build/*', './css/build/*']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ]
  }
}