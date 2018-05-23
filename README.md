# Mazda Progressive Web Application
This is a sample Progressive Web App based

I have been working on mazda.com.au for a while and I decided to implement the website in other way as a complete progressive web application.

This is my post about this project in my blog:
https://ehsangazar.com/progressive-web-app-and-how-to-have-one-44a379133a86

You can see the demo of this project here:
https://mazda-pwa-qmtrcvydqz.now.sh/

These are steps of working on this project, I made it step by step so you can do the same for your project or simply clone this project:

# How to Start this project for development:
Run commands below
```
npm i
npm run dev
```

# How to Start this project for production:
Run commands below
```
npm i
npm run build
npm run start
```


## Step 1: Initilizing the project!
I am using Next.js because it gives me:
- Server Side Rendering
- HMR (Hot Module Reloading) and Error Reporting
```
// Run this command
npm install --save next react react-dom
// Change package.json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
// and creating pages/index.js

export default () => <div>Welcome to next.js!</div>
```


## Step 2: Adding Styled Component to the project
I am using Styled-Component in this project because:
- It has an awesome server-rendering
- It's readable 
- CSS like synstax

```
// Run this command
npm i styled-components
// Create your pages/_document.js
import 'isomorphic-fetch'
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  body {
    background-color: white;
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
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

```

## Step 3: Enabling Service workers
I want to cache everything for next.js in production to be able to see the website offline, therefore I made a button to register my service-worker.js
I also created my own server file to handle /service-worker.js, If I hadn't created my own server for having this path, I should have set Service Workers header to my requests

```
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-workers.js", {
        scope: '/'
    })
    .then(() => {
        // Listen for claiming of our ServiceWorker
        navigator.serviceWorker.addEventListener('controllerchange', (event) => {
        // Listen for changes in the state of our ServiceWorker
        navigator.serviceWorker.controller.addEventListener('statechange', () => {
            // If the ServiceWorker becomes "activated", let the user know they can go offline!
            if (this.state === 'activated') {
            // Show the "You may now use offline" notification
            }
        });
        });
    })
}
```

And for the service-worker.js
```
const CACHE_NAME = 'v1-dependencies-cache';
const REQUIRED_FILES = [
  "/",
  "/mazda2",
  "/favicon.ico"
];

self.addEventListener('install', (event) => {
  // Perform install step:  loading each required file into cache
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      // Add all offline dependencies to the cache
      REQUIRED_FILES.map((url) => new Request(url))
      return cache.addAll(REQUIRED_FILES);
    })
    .then(() => {
      // At this point everything has been cached
      return self.skipWaiting();
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      // Cache hit - return the response from the cached version
      if (response) {
        return response;
      }
      // Not in cache - return the result from the live server
      // `fetch` is essentially a "fallback"
      return fetch(event.request);
    })
  );

  // if request is not in cache
  if (
    event.request.url.includes('_next')
    || event.request.url.includes('static')
  ){
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Add all offline dependencies to the cache
        return cache.add(event.request);
      })
  }
});
```



## Step 4: Background Sync Data
I have created background sync data to be called by a button, therefore I cache another request,

```
if ("serviceWorker" in navigator) {
    this._askForPermision()
    .then(()=>{
    navigator.serviceWorker.ready.then((swRegistration) => {
        return swRegistration.sync.register('SyncLogo');
    });
    });
}
```

And in service-worker.js
```
self.addEventListener('sync', function (event) {
  if (event.tag == 'SyncLogo') {
    event.waitUntil(
      self.registration.showNotification("Sync event fired!")
    )
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.add(new Request('/static/logo.png'));
        })
    )
  }
});
```


## Step 5: Send Notifications
After going to offline mode, Event listener will fire a sync command to trigger background sync functionality of servicer workers.
But for showinng notification, we need to ask for a permission

```
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
```

And this line just creates a notification
```
self.registration.showNotification("Sync event fired!")
```


## Step 6: Creting Manifest
Just creating Manifest to have experience of installing the app on your devices
Creating a manifest.json is the first step
```
{
    "short_name": "MazdaPWA",
    "name": "Mazda Progressive Web Application",
    "icons": [{
            "src": "/logo.png",
            "type": "image/png",
            "sizes": "192x192"
        },
        {
            "src": "/logo.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ],
    "start_url": "/",
    "background_color": "#990000",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#990000"
}
```

And then putting the meta tag for our HTML file inn _document.js

```
<link href="/manifest.json" rel="manifest" />
```

## Step 7: Making website ready for sharing
The concept of OpenGraph exists for managing what you want to be shared on social media!
There are general meta tags that needs to be customized in each page
```
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
```

## Step 8: Working on Server Rendering
Because we are using next.js with the help of getInitialProps and passing responses to props of the page, we can simply have SSR in this project

```
static getInitialProps({  }) {
    // simply fetch everything and pass it to the props of the page
    return {}
}
```

## Step 9: Securing with HTTPS 
It depends where you want to deploy your app. There are different methods which the best way to handle this, is to use your host, however sometimes you have your own server!

## Developing Push Notifications
Addding OneSignal and Normal WebPush to the app, there are new ways like using OneSignal.com for managing your push notifications,
If you want to manage your own:

```
const applicationServerPublicKey = <NEW KEY>
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
```

and then you can use subscription data which is a JSON to push notification by a website like `https://web-push-codelab.glitch.me/`

You can also listen to push event:
```
self.addEventListener('push', function (event) {
  const title = 'Push Notification Add event listener';
  const options = {
    body: 'Yay it works.',
    icon: 'static/logo.png',
    badge: 'static/logo.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
```

Any question or pull-request, feel free to contanct me by @ehsangazar