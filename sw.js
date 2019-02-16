var cache1="c1";
this.addEventListener("intall",function(event){
	event.waitUntil(

		caches.open(cache1).then(cache=>{
			cache.addAll(["resume.css","form.css"
				])
		})
		);
});

this.addEventListener('fetch',function(event){
	event.respondWith(
     caches.open(cache1).then(function(cache){
     	return cache.match(event.request).then(function(res){
     		return res || fetch(event.request).then(function(reqres){
             cache.put(event.request,reqres.clone());
     		})
     	})
     })
		)
})
