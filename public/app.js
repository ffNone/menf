if ("serviceWorker" in navigator) {
  // Register the service worker
  navigator.serviceWorker.register("./sw.js")
    .then((registration) => {
 
      // Check if there is already a waiting service worker
      if (registration.waiting) {
        registration.waiting.postMessage({ action: 'skipWaiting' });
      }

      // Check for new updates when service worker state changes
      registration.onupdatefound = () => {
        const newWorker = registration.installing;
        newWorker.onstatechange = () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // Notify user or refresh the page if new content is available
            newWorker.postMessage({ action: 'updateAvailable' });
          }
        };
      };

      // **Add Periodic Check for Updates**
      registration.update();

      // Check for updates every hour
      setInterval(() => {
        registration.update();
      }, 3600000); // 3600000 ms = 1 hour
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });

  // Listen for the service worker's update message
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data.action === 'updateAvailable') {
      // Force refresh the page when an update is available
      window.location.reload();
    }
  });
}
