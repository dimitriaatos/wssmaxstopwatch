import NoSleep from 'nosleep.js'
import uiEventNames from './uiEventNames.js'

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
      uiEventNames.forEach(event => {
        document.removeEventListener(event, enableNoSleep, false)
      })
      noSleep.enable()
      console.log('noSleep enabled')
      
    }
    uiEventNames.forEach(event => {
      document.addEventListener(event, enableNoSleep, false)
    })
  }

  return wakeLock
}

preventFromSleeping()

// export default noSleep