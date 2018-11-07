self.addEventListener('install', function (event) {
  console.log('ServiceWorker Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/src/js/app.js',
          '/src/js/grayscale.js',
          '/src/js/main.min.js',

          '/src/img/hero.jpg',
          '/src/img/intro.jpg',
          '/src/img/logo-ocha.png',
          '/src/img/resources',
          '/src/img/sky.png',
          '/src/img/thumbnail-image-01.jpg',
          '/src/img/thumbnail-image-02.jpg',

          '/src/vendor/bootstrap/css/bootstrap.min.css',
          '/src/vendor/fontawesome-free/css/all.min.css',

          '/src/css/style.css',

          '/src/vendor/jquery/jquery.min.js',
          '/src/vendor/bootstrap/js/bootstrap.bundle.min.js',
          '/src/vendor/jquery-easing/jquery.easing.min.js',
          '/src/js/main.min.js',     
          '/src/js/app.js',     

          'https://fonts.googleapis.com/css?family=Varela+Round',
          'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('ServiceWorker Activated');
});

self.addEventListener('fetch', function(event) {
  console.log('ServiceWorker Fetch');
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});