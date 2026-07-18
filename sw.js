/* Team515 Service Worker
   전략: 네트워크 우선(network-first) → 오프라인이면 캐시 폴백.
   온라인일 때는 항상 최신을 받아오므로 data.js만 고쳐 재배포하면 모든 폰에 반영됨. */

const CACHE = "team515-v6";
const ASSETS = [
  "./", "./index.html", "./data.js", "./manifest.json", "./logo-transparent.png",
  "./media/hero.mp4", "./media/hero-poster.jpg",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
