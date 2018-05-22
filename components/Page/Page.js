import React from 'react'


class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      offline: true
    }
  }

  componentDidMount() {
    // Service Worker
    if (this.props.env.NODE_ENV === 'production') {
      if ("serviceWorker" in navigator) {
        console.log('ServiceWorker::: Registered')
        navigator.serviceWorker.register("/service-workers.js", {
          scope: '/'
        })
          .then(() => {
            console.log('ServiceWorker::: Registered')

            // Listen for claiming of our ServiceWorker
            navigator.serviceWorker.addEventListener('controllerchange', (event) => {
              // Listen for changes in the state of our ServiceWorker
              navigator.serviceWorker.controller.addEventListener('statechange', () => {
                // If the ServiceWorker becomes "activated", let the user know they can go offline!
                if (this.state === 'activated') {
                  // Show the "You may now use offline" notification
                  this.setState({
                    offline: true
                  })
                }
              });
            });

          })
      }
    }

  }

  render() {
    return (
      <div>
        {this.state.offline &&
          <div> Service Worker is Active </div>
        }
        {this.props.children}
      </div>
    )
  }
}

export default Page
