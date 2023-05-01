const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const CopyPlugin = require("@spinodev/copy-webpack-plugin-cached");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/vue/main.js",
  devtool: "source-map",
  output: {
    filename: "main.min.js",
    path: path.resolve(__dirname, "./build/"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".vue", ".tsx", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new FileManagerPlugin({
      events: {
        onStart: {
          copy: [
            {
              source: "./src/copy_cache",
              destination: "./asset_cache/",
            },
          ],
        },
      },
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new VueLoaderPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: "./src/images",
          to: "./images",
          force: false,
        },
      ],
      options: {
        cacheLocation: "./asset_cache/copy_cache",
      },
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 100,
          },
        },
      ],
      overrideExtension: true,
      detailedLogs: false,
      silent: false,
      strict: true,
    }),

    new CleanWebpackPlugin(),
  ],
};
