import React from 'react'
import { Page } from '../components'
import Link from 'next/link'
const env = process ? process.env : null

class Index extends React.Component {
  static async getInitialProps() {

    return { env }
  }

  render() {
    const { env } = this.props
    return (
      <Page env={env}>
        <Link href="/">
          <a>HomePage</a>
        </Link>
        <br />
        <Link href="/mazda2">
          <a>Mazda2</a>
        </Link>
        <div>
          HomePage
        </div>
      </Page>
    )
  }
}

export default Index
