self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("delbarro-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./estilos.css",
        "./inscripcion.html",
        "./comprobante.html",
        "./recupero.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
