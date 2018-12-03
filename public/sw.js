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
          '/src/img/ai01.jpg',
          '/src/img/attack-health01.png',
          '/src/img/attack-education03.jpg',
          '/src/img/attack-health02.png',          
          '/src/img/crisis-on-education.png',
          '/src/img/HDX-logo-home.svg',
          '/src/img/attack-health04.jpg',
          '/src/img/hero.jpg',        
          '/src/img/hero.jpg',
          '/src/img/hero1.jpg',
          '/src/img/hero2.jpg',
          '/src/img/hero3.jpg',
          '/src/img/hero4.jpg',
          '/src/img/hero5.jpg',
          '/src/img/hero6.jpg',
          '/src/img/opportunites-section.jpg',
          '/src/img/logo-ocha.png',
          '/src/img/install.jpg',
          '/src/img/number-of-partners.png',
          '/src/img/opportunites-section.png',
          '/src/img/timeline01.png',         
          '/src/vendor/bootstrap/css/bootstrap.min.css',
          '/src/vendor/fontawesome-free/css/all.min.css',
          '/src/css/style.css',
          '/src/css/c3.css',
          '/src/css/greyscale.css',
          '/src/css/high-contrast.css',
          '/src/css/slider.css',
          '/src/css/underline-links.css',
          '/src/css/text-color-contrast.css',
          '/src/css/yellow-links.css',
          '/src/vendor/jquery/jquery.min.js',
          '/src/vendor/bootstrap/js/bootstrap.bundle.min.js',
          '/src/vendor/jquery-easing/jquery.easing.min.js',
          '/src/js/d3.min.js',  
          '/src/js/c3.min.js', 
          '/src/js/main.min.js',   
          '/src/js/crossfilter.v1.min.js',     
          '/src/js/app.js',            
          '/src/reports/World_Humanitarian_Data_and_Trends_2012.pdf',   
          '/src/reports/World_Humanitarian_Data_and_Trends_2013.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2014.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2015.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2016.pdf',  
          '/src/reports/World_Humanitarian_Data_and_Trends_2017.pdf', 
          '/src/resources/WHDT_2018_Global_Landscape_EN.pdf', 
          '/src/resources/WHDT_2018_Global_Landscape_FR.pdf',
          '/src/resources/WHDT_2018_Global_Landscape_SP.pdf',
          '/src/resources/WHDT_2018_Highlights_EN.pdf',  
          '/src/resources/WHDT_2018_Highlights_FR.pdf', 
          '/src/resources/WHDT_2018_Highlights_SP.pdf',             
          '/src/resources/attacks_on_healthcare.pdf', 
          '/src/resources/idetect-nigeria.pdf', 
          '/src/data/crises_length.csv',
          '/src/data/data.csv',
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js',
          'https://cdn.jsdelivr.net/npm/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js',
          'https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js',
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