require('babel-register')({
  babelrc: false,
  presets: ['es2015']
})

module.exports = require('./server.es6.js')
