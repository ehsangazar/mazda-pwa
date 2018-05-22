const express = require('express')
const path = require('path')
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app
  .prepare()
  .then(() => {
    const server = express()

    // Serve bundled static assets
    server.use(express.static('static'))

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const {
        pathname,
        query
      } = parsedUrl

      if (pathname === '/') {
        return app.render(req, res, '/', query)
      } else if (pathname === '/mazda2') {
        app.render(req, res, '/mazda2', query)
      } else {
        handle(req, res, parsedUrl)
      }
    })

    server.listen(3000, err => {
      if (err) {
        throw err
      }
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })

