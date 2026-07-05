const CACHE_NAME = 'medidor-alturas-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Instalar y guardar archivos en caché local
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercepta las peticiones y responde usando la caché guardada
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
