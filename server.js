var path = require('path');

var express = require('express');

var app = express();

app.use(require('morgan')('short'));

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);


app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
    },
}));

app.use(require("webpack-hot-middleware")(compiler));
// app.use(require("webpack-hot-middleware")(compiler, {
//     heartbeat: 10 * 1000,
//     log: console.log
// }));


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname,'index.html' ));
});

app.listen(3000, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log('Server running on port: 3000');
});
