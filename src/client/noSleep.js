import NoSleep from 'nosleep.js'
import interactionEvents from './interactionEvents.js'

const preventFromSleeping = () => {
  let wakeLock
  if ('getWakeLock' in navigator) {

    navigator.getWakeLock('screen').then((wl) => {
      wakeLock = wl.createRequest()
    })
  } else if ('requestWakeLock' in navigator) {

    wakeLock = navigator.requestWakeLock('screen')
  } else if ('WakeLock' in window) {

    const controller = new AbortController()
    const signal = controller.signal
    window.WakeLock.request('screen', {signal})
    wakeLock = controller
  } else if ('wakeLock' in navigator) {
    wakeLock = navigator.wakeLock.request('screen')
  } else {
    console.log('Wake Lock API not supported')
    const noSleep = new NoSleep()
    const enableNoSleep = () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, enableNoSleep, false)
      })
      noSleep.enable()
      console.log('noSleep enabled')
      
    }
    interactionEvents.forEach(event => {
      document.addEventListener(event, enableNoSleep, false)
    })
  }

  return wakeLock
}

preventFromSleeping()

// export default noSleep