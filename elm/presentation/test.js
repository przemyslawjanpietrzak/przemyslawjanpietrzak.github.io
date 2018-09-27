const REQUEST_CACHE_LIFETIME = 60 * 60 * 1000;

const fetchAndSaveAPIRequest = async (request) => {
  const response = await fetch(event.request)
  const parsedResponse = await response.json();
  await idbClient.set(request.url, {
    response: parsedResponse,
    timestamp: Date.now() + REQUEST_CACHE_LIFETIME
  });
  return createResponse(response);
}

if (event.request.url.includes('/api/')) {
  event.respondWith(async () => {
    const keys = await idbClient.keys()
    if (keys.includes(event.request.url)) {
      return idbClient  
        .get(event.request.url)
        .then(({ response, timestamp }) => {
          if (timestamp > Date.now() || !navigator.onLine) {
            return createResponse(response);
          }
          return fetchAndSaveAPIRequest(event.request);
        });
    }
    return fetchAndSaveAPIRequest(event.request);
  });
}