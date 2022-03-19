import { config } from '@/config'

export const cacheName = 'mango-cache'

export const registerSW = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(config.sw).then(
        (registration) => {
          console.log('SW scope: ', registration.scope)
        },
        (error) => {
          console.log('SW failed: ', error)
        }
      )
    })
  }
}
