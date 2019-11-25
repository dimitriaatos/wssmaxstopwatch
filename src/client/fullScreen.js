import interactionEvents from './interactionEvents.js'
import {constants} from './state'

export const toggleFullScreen = () => {
  const doc = window.document
  const docEl = doc.documentElement

  const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen
  const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl)
    return true
  }
  else {
    cancelFullScreen.call(doc)
    return false
  }
}

let waitToHide

const hideCursor = () => {
  document.body.style.cursor = 'auto'
  clearTimeout(waitToHide)
  waitToHide = setTimeout(
    () => {
      document.body.style.cursor = 'none'
    },
    constants.idleMouseTime
  )
}

interactionEvents.forEach(event => {
  document.addEventListener(event, hideCursor, false)
}) 