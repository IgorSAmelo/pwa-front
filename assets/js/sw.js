var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './assets/css/main.css', 
        './assets/css/noscript.css',
        './assets/js/jquery.min.js',
        './assets/js/browser.min.js',
        './assets/js/breakpoints.min.js',
        './assets/js/util.js',
        './assets/js/main.js',

        './assets/images/bg.jpg',
        './assets/images/biblia.png',
        './assets/images/bl_png.png',
        './assets/images/overlay.png',
        './assets/images/pic01.jpg',
        './assets/images/pic02.jpg',
        './assets/images/pic03.jpg',

        './assets/images/icons/1024.png',
        './assets/images/icons/512.png',
        './assets/images/icons/256.png',
        './assets/images/icons/216.png',
        './assets/images/icons/196.png',
        './assets/images/icons/180.png',
        './assets/images/icons/172.png',
        './assets/images/icons/167.png',
        './assets/images/icons/152.png',
        './assets/images/icons/144.png',
        './assets/images/icons/128.png',
        './assets/images/icons/120.png',
        './assets/images/icons/114.png',
        './assets/images/icons/102.png',
        './assets/images/icons/100.png',
        './assets/images/icons/92.png',
        './assets/images/icons/88.png',
        './assets/images/icons/87.png',
        './assets/images/icons/80.png',
        './assets/images/icons/76.png',
        './assets/images/icons/72.png',
        './assets/images/icons/66.png',
        './assets/images/icons/64.png',
        './assets/images/icons/60.png',
        './assets/images/icons/58.png',
        './assets/images/icons/57.png',
        './assets/images/icons/55.png',
        './assets/images/icons/50.png',
        './assets/images/icons/48.png',
        './assets/images/icons/40.png',
        './assets/images/icons/32.png',
        './assets/images/icons/29.png',
        './assets/images/icons/20.png',
        './assets/images/icons/16.png'

    


      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});