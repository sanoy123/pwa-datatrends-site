// Set a name for the current cache
var cacheName = 'v1.0'; 

// Default files to always cache
var cacheFiles = [
          './',
          './index.html',
          './404.html',
          './src/js/app.js',
          './src/js/c3.min.js',
          './src/js/crossfilter.v1.min.js',
          './src/js/d3.min.js',  
          './src/js/main.js',           
          './src/js/main.min.js', 
          './src/reports/World_Humanitarian_Data_and_Trends_2012.pdf', 
          './src/reports/World_Humanitarian_Data_and_Trends_2013.pdf',
          './src/reports/World_Humanitarian_Data_and_Trends_2014.pdf',
          './src/reports/World_Humanitarian_Data_and_Trends_2015.pdf',  
          './src/reports/World_Humanitarian_Data_and_Trends_2016.pdf', 
          './src/reports/World_Humanitarian_Data_and_Trends_2017.pdf', 
          './src/resources/attacks_on_healthcare.pdf', 
          './src/resources/idetect-nigeria.pdf', 
          './src/img/ai01.jpg',
          './src/img/attack_health01.png',
          './src/img/attack-education03.jpg',
          './src/img/attack-health02.jpg',          
          './src/img/crisis-on-education.png',
          './src/img/HDX-logo-home.svg',       
          './src/img/hero.jpg',
          './src/img/hero1.jpg',
          './src/img/hero3.jpg',
          './src/img/hero4.jpg',
          './src/img/hero5.jpg',
          './src/img/hero6.jpg',
          './src/img/install.JPG',
          './src/img/opportunites-section.jpg',
          './src/img/logo-ocha.png',          
          './src/img/number-of-partners.png',
          './src/img/timeline01.png',           
          './src/vendor/bootstrap/css/bootstrap.min.css',
          './src/vendor/fontawesome-free/css/all.min.css',         
          './src/css/c3.css',
          './src/css/greyscale.css',
          './src/css/high-contrast.css',
          './src/css/slider.css',
          './src/css/style.css',
          './src/css/underline-links.css',
          './src/css/text-color-contrast.css',
          './src/css/yellow-links.css',
          './src/vendor/jquery/jquery.min.js',
          './src/vendor/bootstrap/js/bootstrap.bundle.min.js',
          './src/vendor/jquery-easing/jquery.easing.min.js',     
          './src/reports/WHDT_2018_Global_Landscape_EN.pdf',   
          './src/reports/WHDT_2018_Global_Landscape_FR.pdf',  
          './src/reports/WHDT_2018_Global_Landscape_SP.pdf',  
          './src/reports/WHDT_2018_Highlights_EN.pdf',  
          './src/reports/WHDT_2018_Highlights_FR.pdf',  
          './src/reports/WHDT_2018_Highlights_SP.pdf',    
          './src/data/crises_length.csv',
          './src/data/data.csv',
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js',
          'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js',
          'https://cdn.jsdelivr.net/npm/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js',
          'https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js',
          'https://fonts.googleapis.com/css?family=Varela+Round',
          'https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i|Roboto+Condensed:300,300i,400,400i,700,700i|Roboto+Slab:100,300,400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese'
        ]


self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

    	// Open the cache
	    caches.open(cacheName).then(function(cache) {

	    	// Add all the default files to the cache
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
	    })
	); // end e.waitUntil
});


self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(

    	// Get all the cache keys (cacheName)
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {

				// If a cached item is saved under a previous cacheName
				if (thisCacheName !== cacheName) {

					// Delete that cached file
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	); // end e.waitUntil

});


self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);

	// e.respondWidth Responds to the fetch event
	e.respondWith(

		// Check in cache for the request being made
		caches.match(e.request)


			.then(function(response) {

				// If the request is in the cache
				if ( response ) {
					console.log("[ServiceWorker] Found in Cache", e.request.url, response);
					// Return the cached version
					return response;
				}

				// If the request is NOT in the cache, fetch and cache

				var requestClone = e.request.clone();
				return fetch(requestClone)
					.then(function(response) {

						if ( !response ) {
							console.log("[ServiceWorker] No response from fetch ")
							return response;
						}

						var responseClone = response.clone();

						//  Open the cache
						caches.open(cacheName).then(function(cache) {

							// Put the fetched response in the cache
							cache.put(e.request, responseClone);
							console.log('[ServiceWorker] New Data Cached', e.request.url);

							// Return the response
							return response;
			
				        }); // end caches.open

					})
					.catch(function(err) {
						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
					});


			}) // end caches.match(e.request)
	); // end e.respondWith
});