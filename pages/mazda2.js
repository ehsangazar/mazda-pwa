import React from 'react'
import { Page, Button } from '../components'
import Link from 'next/link'
const env = process ? process.env : null

class Mazda2 extends React.Component {

  static async getInitialProps() {
    return { env }
  }

  render() {
    const { env } = this.props
    return (
      <Page env={env}>
        <Link href="/">
          <a>Home Page</a>
        </Link>
        <div>
          Mazda 2
        </div>
      </Page>
    )
  }
}

export default Mazda2
