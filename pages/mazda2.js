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
          <ol>
            <li>
              Pushing to URL instead of Replacing with next/link
            </li>
            <li>
              Service workers and offline working for caching requests
            </li>
          </ol>
        </div>
      </Page>
    )
  }
}

export default Mazda2
