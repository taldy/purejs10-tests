module.exports = {
  mode: "development",
  // devtool: "(none)",
  entry: './src',
  output: {
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
