importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);
workbox.loadModule("workbox-strategies");

// no need to save connectiontype in indexeddb..let it be got at runtime
// we need to store images in sw cache
// check if higher res version is already there
// if user goes from lower bandwidth to higher and we have a lower bandwidth version available, we can do cacheFirst and update

function modifyURL(url) {
  // ect can be 'slow-2g', '2g', '3g', or '4g'.
  const connectionType = navigator.connection.effectiveType;
  console.log(connectionType);
  if (connectionType === "slow-2g" || connectionType === "2g") {
    return url + "?opt=aggressive";
  } else if (connectionType === "4g") {
    return url + "?opt=mild";
  } else {
    return url + "?opt=default";
  }
}

self.addEventListener("fetch", async event => {
  console.log(event.request.url);
  if (!workbox) {
    console.log(`Boo! Workbox didn't load 😬`);
    return;
  }

  console.log(event.request.method);
  if (event.request.method != "GET") {
    return;
  }
  console.log(event.request.destination);

  if (event.request.destination != "image") {
    return;
  }

  console.log(event.request.url);

  event.respondWith(
    strategy.makeRequest({
      request: modifyURL(event.request.url)
    })
  );
});
