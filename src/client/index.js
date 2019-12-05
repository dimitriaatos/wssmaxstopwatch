import './noSleep'
import ReconnectingWebSocket from 'reconnectingwebsocket'
import {toggleFullScreen} from './fullScreen'
import {appState, constants} from './state'
import SyncWatch from 'syncwatch'

['dblclick', 'keydown'].forEach(eventName => {
  document.addEventListener(eventName, ({type, code}) => {
    appState.fullScreen = (type == 'keydown') == (code == 'KeyF') && toggleFullScreen()
  })
})

const watch = new SyncWatch(time => {
  document.getElementById('time').innerHTML = time.formatted
})

const noConnection = (mode = true) => {
  document.getElementById('noConnection').style.display = mode ? 'block' : 'none'
}

const maxSocket = new ReconnectingWebSocket(`ws://${window.location.hostname}:7474`)

maxSocket.timeoutInterval = constants.reconnectAttemptInterval

maxSocket.onopen = (event) => {
  noConnection(false)
}

maxSocket.onmessage = (event) => {
  watch.update(JSON.parse(event.data))
}

maxSocket.onclose = (event) => {
  const now = new Date().getTime()
  watch.update({playing: false, start: now, stop: now})
  noConnection(true)
}

window.onbeforeunload = () => {
  maxSocket.onclose()
  maxSocket.close()
}