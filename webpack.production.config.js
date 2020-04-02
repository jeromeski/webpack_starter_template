const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWepackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    // must be absolute path
    path: path.resolve(__dirname, "./dist"),
    // specify the base path for all the assets/ generic files are within your app is in dist folder
    publicPath: ""
  },
  mode: "production",
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
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        // checks if the filename contains scss
        test: /\.scss$/,
        use: [
          // last will convert js rep to style text inside html page and put css into it
          MiniCssExtractPlugin.loader,
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
      },
      {
        // checks if the filename contains hbs
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    // extract all css from js bundle
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css"
    }),
    new CleanWebpackPlugin({
      // removing old dist bundle and css files
      cleanOnceBeforeBuildPatterns: [
        // remove all files including subdirectories in dist
        "**/*",
        // remove all files including subdir inside build - absolute path
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new HtmlWepackPlugin({
      title: "Hello World",
      // filename: 'subfolder/custom_filename.html',
      meta: {
        title: "Hello world",
        template: "src/index.hbs",
        description: "Some description"
      }
    })
  ]
};
