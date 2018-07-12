const createResponse = obj => new Response(JSON.stringify(obj), {
    headers: {'Content-Type': 'application/json'}
  });
  

if (event.request.url.includes('/api/')) {
    event.respondWith(idbClient
      .keys()
      .then(keys => {
        if (keys.includes(event.request.url)) {
          return idbClient
            .get(event.request.url)
            .then(createResponse);
        }
        return fetch(event.request)
          .then(r => r.json())
          .then(r => idbClient
            .set(event.request.url, r)
            .then(_ => createResponse)
          );
      }));
  }