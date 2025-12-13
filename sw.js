self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open("gk-v1").then(c=>
   c.addAll(["/","index.html","flashcards.html","questionBank.js"])
  )
 );
});