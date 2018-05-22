import React from 'react'


class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      offline: true
    }
  }

  _registerServiceWorkers = () =>{
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

  _syncInBackground = () => {
    console.log('ServiceWorker::: Background Sync')
    if ("serviceWorker" in navigator) {
      new Promise((resolve, reject) => {
        if (!("Notification" in window)) {
          console.log("This browser does not support desktop notification");
          reject()
        }

        // Let's check whether notification permissions have alredy been granted
        else if (Notification.permission === "granted") {
          resolve()
        }

        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== 'denied' || Notification.permission === "default") {
          Notification.requestPermission((permission) => {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
              resolve()
            }
          });
        }
      })
      .then(()=>{
        navigator.serviceWorker.ready.then((swRegistration) => {
          return swRegistration.sync.register('SyncLogo');
        });
      });
    }
  }

  _offlineHandler = () => {
    console.log('ServiceWorker::: Status::: offline')
    setTimeout(()=>{
      this._syncInBackground()
    }, 1000)
  }

  _onlineHandler = () => {
    console.log('ServiceWorker::: Status::: online')
  }

  _notifyUser = () => {
    console.log('ServiceWorker::: Calling the sync function automatically')
    window.addEventListener('online', this._onlineHandler);
    window.addEventListener('offline', this._offlineHandler);
  }

  render() {
    return (
      <div>
        {this.state.offline &&
          <div> Service Worker is Active </div>
        }
        <div>
          <button onClick={this._registerServiceWorkers}>
            Registering Service Workers
          </button>
          <button onClick={this._syncInBackground}>
            Background Sync
          </button>
          <button onClick={this._notifyUser}>
            Make Background Sync Automatic
          </button>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Page
