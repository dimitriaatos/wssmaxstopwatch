import './noSleep'
import formatTime from './formatTime'
import ReconnectingWebSocket from 'reconnectingwebsocket'
import {toggleFullScreen} from './fullScreen'
import {state, appState, constants} from './state'

document.addEventListener('dblclick', () => {
  appState.fullScreen = toggleFullScreen()
})

const displayTime = (time) => {
  document.getElementById('time').innerHTML = time
}

const getDistance = () => (state.play ? new Date().getTime() : state.stop) - state.start

const handleTime = () => {
  displayTime(formatTime(getDistance(), state.format))
}

let steps

const stopwatch = (newState) => {
  Object.assign(state, newState)

  if (state.play) {
    clearInterval(steps)
    steps = setInterval(handleTime, constants.updateTime)
  } else  {
    clearInterval(steps)
  }
  handleTime()
}
    
  const noConnection = (mode = true) => {
    document.getElementById('noConnection').style.display = mode ? 'block' : 'none'
  }
  
  const maxSocket = new ReconnectingWebSocket(`ws://${window.location.hostname}:7474`)
  
  maxSocket.timeoutInterval = constants.reconnectAttemptInterval
  
  maxSocket.onopen = (event) => {
    noConnection(false)
  }
  
  maxSocket.onmessage = (event) => {
    const {message, ...newState} = JSON.parse(event.data)
    stopwatch(newState, message)
  }
  
  maxSocket.onclose = (event) => {
    const now = new Date().getTime()
    stopwatch({play: false, start: now, stop: now}, 'playPause')
    stopwatch({start: now, stop: now}, 'reset')
    noConnection(true)
  }
  
  window.onbeforeunload = () => {
    maxSocket.onclose()
    maxSocket.close()
  }