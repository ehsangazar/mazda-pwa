import 'isomorphic-fetch'
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  /* @font-face {
    font-family: Replica;
    src:url("/static/fonts/(...).woff2") format("woff2");
    font-weight: 600;
  } */
  body {
    background-color: white;
  }
  .hidden {
    display: none;
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Sample Web Page of Mazda Progressive Web App</title>

          {/* Responsiveness */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Manifest */}
          <link href="/manifest.json" rel="manifest" />

          {/* Twitter OpenGraph */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ehsangazar" />
          <meta name="twitter:creator" content="@ehsangazar" />

          {/* SocialMedia OpenGraph */}
          <meta property="og:url" content="http://localhost:3000/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Open Graph: Sample Web Page of Mazda PWA" />
          <meta property="og:description" content="Open Graph: Best Progressive Web App" />
          <meta property="og:image" content="http://localhost:3000/logo.png" />

          {this.props.styleTags}
        </Head>
        <body>
          <div id="offlineNotification" className="hidden">
            Offline
          </div>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
