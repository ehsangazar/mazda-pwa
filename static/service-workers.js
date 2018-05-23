const CACHE_NAME = 'v1-dependencies-cache';
const REQUIRED_FILES = [
  "/",
  "/mazda2",
  "/favicon.ico"
];


self.addEventListener('install', (event) => {
  // Perform install step:  loading each required file into cache
  console.log('ServiceWorker::: Installed')
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


self.addEventListener('sync', function (event) {
  console.log(`ServiceWorder::: Sync fired ${event.tag}`)
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


self.addEventListener('push', function (event) {
  console.log('Service Worker::: Push Received.');
  console.log(`Service Worker::: Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification Add event listener';
  const options = {
    body: 'Yay it works.',
    icon: 'static/logo.png',
    badge: 'static/logo.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});


self.addEventListener('notificationclick', function (event) {
  console.log('Service Worker::: Notification click Received.');

  event.notification.close();
});
