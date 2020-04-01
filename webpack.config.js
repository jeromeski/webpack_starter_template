const path = require("path");
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // must be absolute path
    path: path.resolve(__dirname, "./dist"),
    // specify the base path for all the assets/ generic files are within your app is in dist folder
    publicPath: "dist/"
  },
  mode: "none",
  module: {
    rules: [
      {
        // checks if the filename contains png or jpg
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      },
      {
        // checks if the filename contains css
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // checks if the filename contains scss
        test: /\.scss$/,
        use: [
          // last will convert js rep to style text inside html page and put css into it
          "style-loader",
          // 2nd convert css to js representation
          "css-loader",
          // first convert sass to css
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["stage-0"],
            plugins: ["transform-class-properties"]
          }
        }
      }
    ]
  }, plugins: [
    new TerserPlugin()
  ]
};
