/// <reference lib="WebWorker" />

import { response, request } from "express"

export type {}

declare const self: ServiceWorkerGlobalScope

const CACHE_NAME = 'v1'

const cacheableResourses = [
  '/',
  '/client.js',
  '/client.css',
  '/manifest.json',
  '/pwa.png',
  '/favicon.ico',
  '/index.html',
]

const cacheableApiRequestUrls = [
  '/api/deals'
]

const isCacheableApiRequests = (url: string): boolean => {
  return cacheableApiRequestUrls.some(apiUrl => url.includes(apiUrl))
}

self.addEventListener('install', event => {
  console.log('SW: installed')
  cachingResources(event)
})

self.addEventListener('activate', (event: ExtendableEvent) => {
  console.log('SW: activated')
});

self.addEventListener('fetch', (event: FetchEvent) => {
  const { url } = event.request

  event.respondWith(
    isCacheableApiRequests(url)
      ? networkAndUpdateCacheStrategy(event)
      : networkOrCacheStrategy(event)
    )
});

function networkAndUpdateCacheStrategy(event: FetchEvent): Promise<Response> {
  console.log('SW: networkAndUpdateCacheStrategy', event.request.url)

  return fetch(event.request)
    .then(response => {
      cachingApiResponse(event, response)
      return response
    })
    .catch(() => {
      return fromCache(event.request)
    })
}

function networkOrCacheStrategy(event: FetchEvent): Promise<Response> {
  console.log('SW: networkOrCacheStrategy', event.request.url)
  
  return fetch(event.request)
  .then(response => {
    return response
  })
  .catch(() => {
    return fromCache(event.request)
  })
}

function cachingResources(event: ExtendableEvent): void {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(cacheableResourses)
        .then(() => console.log('SW: cached')))
  )
}

function cachingApiResponse(event: FetchEvent, response: Response): void {
  const clonedResponse = response.clone()
  const clonedRequest = event.request.clone()

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.put(clonedRequest, clonedResponse)
        .then(() => console.log('SW: cached')))
  )
}

function fromCache(request: Request): Promise<Response> {
  console.log('SW: from cache -', request.url)

  return caches.open(CACHE_NAME)
    .then((cache) => cache.match(request)
      .then((matching) => matching || Promise.reject(`SW: no match in cache for ${request.url}`))
    )
}
