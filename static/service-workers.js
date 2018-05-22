var CACHE_NAME = 'v1-dependencies-cache';
const REQUIRED_FILES = [
  "/",
  "/mazda2",
  "/favicon.ico"
];


self.addEventListener('install', function (event) {
  // Perform install step:  loading each required file into cache
  console.log('ServiceWorker::: Installed')
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      // Add all offline dependencies to the cache
      return cache.addAll(REQUIRED_FILES);
    })
    .then(function () {
      // At this point everything has been cached
      return self.skipWaiting();
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
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
      .then(function (cache) {
        // Add all offline dependencies to the cache
        return cache.add(event.request);
      })
  }

});
