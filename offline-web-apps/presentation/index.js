// Import React
import React from "react";
import screen1 from '../assets/screen1.png';
// Import Spectacle Core tags
import {
  Deck,
  Heading,
  CodePane,
  ListItem,
  List,
  Image,
  Table,
  TableRow,
  TableItem,
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
          <Image src={screen1} height="500"/>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Service worker precache
          </Heading>
          <CodePane
            lang="javascript"
            theme="light"
            source={`
// sw-precache.config.js
module.exports = {
  staticFileGlobs: [
    'static/css/**.css',
    'static/**.html',
    'static/images/**.*',
    'static/js/**.js'
  ],
  stripPrefix: 'static/',
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};`
          }
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
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => setOfCachedUrls(cache))
      .then(cachedUrls => Promise.all(
          Array.from(urlsToCacheKeys.values()).map((cacheKey) => {
            if (!cachedUrls.has(cacheKey)) {
              const request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then((response) => {
                if (!response.ok) {
                  throw new Error(\`Request for \${cacheKey} returned a response with status  \${response.status}\`);
                }

                return cleanResponse(response)
                  .then(responseToCache => cache.put(cacheKey, responseToCache));
              });
            }
          })
      ))
    .then(() => self.skipWaiting())
  )
});`
          }/>
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
  if (['GET', 'OPTIONS'].includes(event.request.method)) {
      const { url } = event.request;
      const shouldRespond = urlsToCacheKeys.has(url);
      if (shouldRespond) {
          event.respondWith(
            caches
                .open(cacheName)
                .then((cache) => cache.match(urlsToCacheKeys.get(url)))
                .then((response) => {
                    if (response) {
                        return response;
                    }
                    throw Error('The cached response that was expected is missing.');
                }).catch(_ => fetch(event.request))
            );
      }

  }
});`
          }/>
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
}`
          }/>
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

const fetchAndSaveAPIRequest = request => fetch(event.request)
    .then(r => r.json())
    .then(response => idbClient
        .set(event.request.url, { response, timestamp: now() + REQUEST_CACHE_LIFETIME })
        .then(_ => createResponse(response))
    );

if (event.request.url.includes('/painting/')) {
    event.respondWith(idbClient
      .keys()
      .then(keys => {
        if (keys.includes(event.request.url)) {
          return idbClient  
            .get(event.request.url)
            .then(({ response, timestamp }) => {
              if (timestamp > now() || !navigator.onLine) {
                return createResponse(response);
              }
              return fetchAndSaveAPIRequest(event.request);
            });
        }
        return fetchAndSaveAPIRequest(event.request);
      }));
  }`
          }/>
        </Slide>

         <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary" caps>
            Demo
          </Heading>
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
});`
          }/>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why?
          </Heading>
          <List>
            <ListItem>Less exceptions</ListItem>
            <ListItem>More expressive</ListItem>
            <ListItem>More modular</ListItem>
            <ListItem>More testable</ListItem>
            <ListItem>Immutable</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How?
          </Heading>
          <List>
            <ListItem>Composable Functional JavaScript</ListItem>
            <ListItem>JavaScript: fantasy-land, immutable-ext</ListItem>
            <ListItem>Java: vavr.io</ListItem>
            <ListItem>Python: OSlash, pyMonet</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Links
          </Heading>
          <List>
            <ListItem textSize="15">https://github.com/przemyslawjanpietrzak/pyMonet</ListItem>
            <ListItem textSize="15">https://github.com/fantasyland/fantasy-land</ListItem>
            <ListItem textSize="15">https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript</ListItem>
            <ListItem textSize="15">https://github.com/DrBoolean/immutable-ext</ListItem>
            <ListItem textSize="15">http://www.vavr.io/</ListItem>
            <ListItem textSize="15">https://github.com/FormidableLabs/spectacle (for presentatnion)</ListItem>
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
