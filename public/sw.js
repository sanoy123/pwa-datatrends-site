self.addEventListener('install', function (event) {
  console.log('ServiceWorker Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/src/js/app.js',
          '/src/js/main.js',
          '/src/js/main.min.js',
          '/src/img/hero.jpg',
          '/src/img/hero1.jpg',
          '/src/img/hero2.jpg',
          '/src/img/hero3.jpg',
          '/src/img/hero4.jpg',
          '/src/img/hero5.jpg',
          '/src/img/hero6.jpg',
          '/src/img/intro.jpg',
          '/src/img/logo-ocha.png',
          '/src/img/resources.jpg',
          '/src/img/sky.png',
          '/src/img/thumbnail-image-01.jpg',
          '/src/img/thumbnail-image-02.jpg',
          '/src/img/thumbnail-image-03.jpg',
          '/src/img/ai01.jpg',

          '/src/vendor/bootstrap/css/bootstrap.min.css',
          '/src/vendor/fontawesome-free/css/all.min.css',

          '/src/css/style.css',
          '/src/css/greyscale.css',
          '/src/css/high-contrast.css',
          '/src/css/slider.css',
          '/src/css/underline-links.css',
          '/src/css/yellow-links.css',


          '/src/vendor/jquery/jquery.min.js',
          '/src/vendor/bootstrap/js/bootstrap.bundle.min.js',
          '/src/vendor/jquery-easing/jquery.easing.min.js',
          '/src/js/main.min.js',     
          '/src/js/app.js',  
          
          '/src/reports/World_Humanitarian_Data_and_Trends_2012.pdf',   
          '/src/reports/World_Humanitarian_Data_and_Trends_2013.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2014.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2015.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2016.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2017.pdf',  

          'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js',

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