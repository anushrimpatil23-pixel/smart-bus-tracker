// This is a basic Service Worker to pass the PWA install requirements
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
    // Leave this empty for now. It simply allows the app to pass the offline check.
});
