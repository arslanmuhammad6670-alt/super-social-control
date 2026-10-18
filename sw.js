/* Super Social Control PWA — service worker
   App shell ko cache karta hai taa ke app offline bhi khule.
   API calls (Pollinations / Facebook) hamesha network se jati hain. */
var CACHE = 'super-social-v8';
var SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(SHELL);
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event) {
  var url = event.request.url;
  // Sirf apni origin ki GET requests cache-first; baqi sab seedha network.
  if (event.request.method !== 'GET' || url.indexOf(self.location.origin) !== 0) return;
  event.respondWith(
    caches.match(event.request).then(function(hit) {
      var network = fetch(event.request).then(function(res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function(cache) { cache.put(event.request, copy); });
        }
        return res;
      }).catch(function() { return hit; });
      return hit || network;
    })
  );
});
