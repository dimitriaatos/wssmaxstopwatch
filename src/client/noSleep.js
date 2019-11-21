import NoSleep from 'nosleep.js'

const noSleep = (noSleepButton) => {
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
    noSleepButton.style.display = 'block'
    noSleep.noSleep = new NoSleep()
    const enableNoSleep = () => {
      ['click', 'keydown'].forEach(event => {
        noSleepButton.removeEventListener(event, enableNoSleep, false)
      })
      noSleepButton.style.display = 'none'
      noSleep.noSleep.enable()
    }
    window.addEventListener('click', enableNoSleep, false)
    window.addEventListener('keydown', enableNoSleep, false)
  }

  return wakeLock
}

export default noSleep