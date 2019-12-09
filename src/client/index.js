import './noSleep'
import ReconnectingWebSocket from 'reconnectingwebsocket'
import fullScreen from 'fullscreen.js'
import SyncWatch from 'syncwatch'
import hideMouse from 'hide-mouse'

const constants = {
  updateTime: 50,
  reconnectAttemptInterval: 2000,
  idleMouseTime: 2000,
}
 
// Hide mouse on fullscreen when idle
const fullScreenMouse = hideMouse({ el: document.body, hideAfter: constants.idleMouseTime })
fullScreenMouse.deactivate()

// Fullscreen
;['dblclick', 'keydown'].forEach(eventName => {
  document.addEventListener(eventName, ({type, code}) => {
    const newState = !fullScreen.is()
    if ((type == 'keydown') == (code == 'KeyF')) {
      fullScreenMouse[newState ? 'activate' : 'deactivate']()
      fullScreen[newState ? 'request' : 'exit']()
    }
  })
})

// Stopwatch
const watch = new SyncWatch(time => {
  document.getElementById('time').innerHTML = time.formatted
})

const noConnection = (mode = true) => {
  document.getElementById('noConnection').style.display = mode ? 'block' : 'none'
}

// WebSocket connection
const maxSocket = new ReconnectingWebSocket(`ws://${window.location.hostname}:7474`)

maxSocket.timeoutInterval = constants.reconnectAttemptInterval

maxSocket.onopen = (event) => {
  noConnection(false)
}

maxSocket.onmessage = (event) => {
  watch.update(JSON.parse(event.data))
}

maxSocket.onclose = (event) => {
  watch.toggle(false).reset()
  noConnection(true)
}

window.onbeforeunload = () => {
  maxSocket.onclose()
  maxSocket.close()
}