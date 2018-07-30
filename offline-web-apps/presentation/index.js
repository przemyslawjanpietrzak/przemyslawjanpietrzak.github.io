// Import React
import React from "react";
import screen1 from "../assets/screen1.png";
// Import Spectacle Core tags
import {
  Deck,
  Heading,
  CodePane,
  ListItem,
  List,
  Image,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            Offline web apps - with a service worker
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/offline-web-apps/dist
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={screen1} height="500" />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Static files cache
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
// sw.js
[
  ['background.jpg','__STATIC_FILE_HASH__'],
  ['app.js', '__STATIC_FILE_HASH__'],
  ['index.html', '__STATIC_FILE_HASH__'],
  ['sw.js', '__STATIC_FILE_HASH__'],
];`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Cache static files
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
self.addEventListener('install', (event) => {
  event.waitUntil(async () => {
    const cache = await caches.open(STATIC_FILES_CACHE_NAME);
    const cachedUrls = await setOfCachedUrls(cache);
    return Promise.all(
      Array.from(cachedUrls.values()).map(async (cacheKey) => {
        if (!cachedUrls.has(cacheKey)) {
          const request = new Request(cacheKey, { credentials: 'same-origin' });
          const response = await fetch(request);
          if (!response.ok) {
            throw new Error();
          }

          return cache.put(cacheKey, response);
        }
      })
    );
  });
});`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            On fetch
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
self.addEventListener('fetch', (event) => {
  if (['POST', 'PUT', 'DELETE'].includes(event.request.method)) {
    return;
  }
  const { url } = event.request;
  event.respondWith(
    caches
      .open(STATIC_FILES_CACHE_NAME)
      .then((cache) => cache.match(urlsToCacheKeys.get(url)))
      .then((response) => {
        if (response) {
          return response;
        }
        throw Error('The cached response that was expected is missing.');
      }).catch(_ => fetch(event.request))
  );

});
            `}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Demo
          </Heading>
        </Slide>


        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Index DB ORM
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
  import idb from 'idb';

  export const idbFactory = storeKey => {  
    const dbPromise = idb.open(\`\${storeKey}-store\`, 1, upgradeDB => {
      upgradeDB.createObjectStore(storeKey);
    });
  
    return {
      get(key) {
        return dbPromise.then(db => {
          return db.transaction(storeKey)
            .objectStore(storeKey).get(key);
        });
      },
      set(key, val) {
        return dbPromise.then(db => {
          const tx = db.transaction(storeKey, 'readwrite');
          tx.objectStore(storeKey).put(val, key);
          return tx.complete;
        });
      },
      delete(key) {
        return dbPromise.then(db => {
          const tx = db.transaction(storeKey, 'readwrite');
          tx.objectStore(storeKey).delete(key);
          return tx.complete;
        });
      },
      keys() {
        return dbPromise.then(db => {
          const tx = db.transaction(storeKey);
          const keys = [];
          const store = tx.objectStore(storeKey);
  
          (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
            if (!cursor) return;
            keys.push(cursor.key);
            cursor.continue();
          });
  
          return tx.complete.then(() => keys);
        });
      }
    }
  };
  `}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Cache API
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
const createResponse = obj => new Response(JSON.stringify(obj), {
  headers: {'Content-Type': 'application/json'}
});

if (event.request.url.includes('/api/')) {
  event.respondWith(async () => {
    const keys = await idbClient.keys();
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
  });
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Demo
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Invalidate cache idb
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
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
}`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Lie-fi
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
self.addEventListener('fetch', (event) => {
  event.respondWith(Promise(resolve => {
    setTimeout(() => {
      getFromCache.then(resolve)
    }, TIMEOUT)

    fetch(url).then(resolve)
  })

  )
});`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            refresh data
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
self.addEventListener('activate', (event) => {
  let setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.keys())
      .then(existingRequests => Promise.all(
          existingRequests.map((existingRequest) => {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
      ))
      .then(() => self.clients.claim())
  );
});`}
          />
        </Slide>


         <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            New version
          </Heading>
        </Slide>


         <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Demo
          </Heading>

        </Slide>


         <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Push service
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
subscriptions.forEach(sub => {
  const payload = JSON.stringify({ title: 'new-version' });

  webPush
    .sendNotification(sub, payload)
});`}
          />

        </Slide>

         <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            On push
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
// sw.js

self.addEventListener('push', e => {
  const { title } = e.data.json();
  self.registration
    .showNotification(title, {
      body: 'new version is available',
    });
  self.registration.update();
})`}
          />

        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            On push
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
const send = async () => {
  const register = await navigator.serviceWorker.register('sw.js', {
    scope: '/'
  });

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey),
  });

  await fetch('/ps/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  });
}

if ('serviceWorker' in navigator) {
  send()
    .catch(err => console.error(err))
}`}
          />

        </Slide>



        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Check network status
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
if (navigator.onLine) {
  console.log('online');
} else {
  console.log('offline');
}

window.addEventListener('offline', _ => { console.log('offline'); });
window.addEventListener('online', _ => { console.log('online'); });
`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Webpack helpers
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
// webpack.config.js
{ 
  loader: 'string-replace-loader',
  options: {
  multiple: [
    {
      search: '__SW_STATIC_HASH__',
      replace: staticHash
    },
    {
      search: '__SW_API_HASH__',
      replace: apiHash
    }
  ]
}
`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Conclusion
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Links
          </Heading>
          <List>
            <ListItem textSize="15">
              https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
            </ListItem>
            <ListItem textSize="15">
              https://github.com/GoogleChromeLabs/sw-precache
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            Thank You ;*
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
