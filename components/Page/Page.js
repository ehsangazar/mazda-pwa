import React from 'react'
import styled from 'styled-components'
import { Button, Alarm } from '../../components'


const PageStyle = styled.div`
  margin: 1em;
  text-align: left;
  width: 100%;
`
class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      offline: true,
      networkStatus: true
    }
  }

  componentDidMount(){

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

  _askForPermision = () => {
    return new Promise((resolve, reject) => {
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
  }

  _syncInBackground = () => {
    console.log('ServiceWorker::: Background Sync')
    if ("serviceWorker" in navigator) {
      this._askForPermision()
      .then(()=>{
        navigator.serviceWorker.ready.then((swRegistration) => {
          return swRegistration.sync.register('SyncLogo');
        });
      });
    }
  }

  _offlineHandler = () => {
    this.setState({networkStatus:false})
    console.log('ServiceWorker::: Status::: offline')
    setTimeout(()=>{
      this._syncInBackground()
    }, 1000)
  }

  _onlineHandler = () => {
    this.setState({networkStatus:true})
    console.log('ServiceWorker::: Status::: online')
  }

  _notifyUser = () => {
    console.log('ServiceWorker::: Calling the sync function automatically')
    window.addEventListener('online', this._onlineHandler);
    window.addEventListener('offline', this._offlineHandler);
  }

  _urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }


  _pushNotification = () => {
    const applicationServerPublicKey = 'BMyZn-clZfJNpZw8ouT7oJlWRxcn6aibmW1nQweRb6B5c--omBHvkzdgVkrNmyt7Fhhdb-NztypEAfvb35TnLGM';
    const applicationServerKey = this._urlBase64ToUint8Array(applicationServerPublicKey);
    console.log('ServiceWorker::: Push Notification for the event')
    if ("serviceWorker" in navigator) {
      this._askForPermision()
        .then(() => {
          navigator.serviceWorker.ready.then((swRegistration) => {
            swRegistration.pushManager.getSubscription()
              .then(function (subscription) {
                const isSubscribed = !(subscription === null);
                if (isSubscribed) {
                  console.log('User IS subscribed.', subscription);
                } else {
                  swRegistration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: applicationServerKey
                  })
                }
              });
          });
        });
    }
  }

  _initialOneSignal = () => {
    console.log('OneSignal')

    const OneSignal = window.OneSignal || [];
    OneSignal.push(() => {
      OneSignal.init({
        appId: "e46748fb-1e5b-4f4f-b4dc-ae05806271ac",
      });
    });

  }

  render() {
    return (
      <PageStyle>
        {this.state.offline &&
          <Alarm> Service Worker is Active </Alarm>
        }
        <Alarm> Network Status: {this.state.networkStatus?'Online':'Offline'} </Alarm>
        <div>
          <Button onClick={this._registerServiceWorkers}>
            Registering Service Workers
          </Button>

          <br />
          <Button onClick={this._syncInBackground}>
            Background Sync
          </Button>

          <br />
          <Button onClick={this._notifyUser}>
            Make Background Sync Automatic And Notify User for Network
          </Button>

          <br />
          <Button onClick={this._pushNotification}>
            Push Notification Initialization
          </Button>

          <br />
          <Button onClick={this._initialOneSignal}>
            One Signal
          </Button>
        </div>
        {this.props.children}
      </PageStyle>
    )
  }
}

export default Page
