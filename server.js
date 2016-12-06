var fs = require('fs')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

// Create server
var Express = require('express')
var app = new Express()
var port = 3000

// Launch webpack-compiler to compile bundle.js
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// Catch all requests and forward them to index.html
app.use(function (req, res) {
  fs.readFile(__dirname + '/dist/index.html', (err, indexData) => {
    if (err) throw err
    res.set('Content-Type', 'text/html')
    res.send(indexData)
  })
})

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
