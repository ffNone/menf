const STATIC_CACHE = "static-cache-v6";
const DYNAMIC_CACHE = "dynamic-cache-v6";
const MAX_CACHE_ITEMS = 50; // Maximum number of items

const ASSETS = [
    "/",
    "./imgs/icons/main-logo.ico",
    
    
];

self.addEventListener("install", evt => {
    evt.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(ASSETS))
            .catch(err => console.log(err))
    );
    self.skipWaiting();
});

self.addEventListener("activate", evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim()) // Place clients.claim() after Promise.all
    );
    self.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage({ action: 'updateAvailable' }));
    });
});


self.addEventListener('fetch', evt => {
    const url = new URL(evt.request.url);

    // Exclude iframe URL from caching
    if (url.pathname === '/destinations') {
        return fetch(evt.request);
    }

    // Proceed with normal caching logic
    if (evt.request.method === 'GET') {
        evt.respondWith(
            caches.match(evt.request).then(cacheResponse => {
                return cacheResponse || fetch(evt.request).then(async fetchResponse => {
                    const cache = await caches.open(DYNAMIC_CACHE);
                    trimCache(DYNAMIC_CACHE, MAX_CACHE_ITEMS);
                    const responseToCache = fetchResponse.clone();

                    // Cache if valid response
                    if (fetchResponse.ok && !fetchResponse.headers.get('Cache-Control')?.includes('no-store')) {
                        cache.put(evt.request, responseToCache);
                    }

                    return fetchResponse;
                }).catch(() => caches.match("/no-connection"));
            })
        );
    }
});

async function trimCache(cacheName, maxItems) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();

    // Remove oldest entries if the cache exceeds maxItems
    while (keys.length > maxItems) {
        const oldestRequest = keys.shift();
        await cache.delete(oldestRequest);
    }
}

    // event.respondWith(
    //   fetch(event.request).catch(() => {
    //     // Serve an offline page or a custom message/emoji
    //     return new Response('😞 Oops! You are offline.', {
    //       headers: { 'Content-Type': 'text/plain' }
    //     });
    //   })
    // );
 