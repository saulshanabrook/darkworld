var webpack = require("webpack");
var path = require("path");
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: [
        path.join(__dirname, "app", "index.js"),
    ],
    output: {
        path: path.join(__dirname, "docs"),
        filename: "bundle.js"
    },
    plugins: [
      // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      new webpack.optimize.UglifyJsPlugin({
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new ExtractTextPlugin('styles.css'),
      new FaviconsWebpackPlugin({
        logo: "./app/img/DWSHIRT.png",
        title: 'DARK WORLD',
        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }),
      new HtmlWebpackPlugin({
        template: './app/index.html',
        // inject: false,
        cache: false,
      })
    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loaders: [
                    // "file?name=[name].[ext]",
                    // "extract",
                    "html?" + JSON.stringify({
                        attrs: ["img:src", "link:href"],
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        collapseWhitespace: true,
                        decodeEntities: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeOptionalTags: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        useShortDoctype: true,
                    })
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader"
            },

            // the url-loader uses DataUrls.
            // the file-loader emits files.
            // { test: /\.woff(2)?(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(woff(2)?|ttf|eot|svg)(\?.+)?$/, loader: "file-loader" }
        ],
    }
};
