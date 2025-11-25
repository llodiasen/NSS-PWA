const CACHE_NAME = 'wasafrica-v1';
const urlsToCache = [
  './',
  './index.html',
  './assets/css/default380f.css',
  './assets/css/plugins380f.css',
  './assets/css/remixicon380f.css',
  './assets/css/responsive380f.css',
  './assets/css/style.css',
  './assets/js/plugins4a7d.html',
  './assets/js/classie5139.html',
  './assets/js/mobilemenu5139.html',
  './assets/js/main5139.html',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png',
  './manifest.json'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Erreur lors de la mise en cache:', error);
      })
  );
  self.skipWaiting();
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourner la réponse du cache ou faire une requête réseau
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          // Vérifier si la réponse est valide
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Cloner la réponse pour la mettre en cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
      .catch(() => {
        // En cas d'erreur, retourner une page hors ligne si disponible
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});

