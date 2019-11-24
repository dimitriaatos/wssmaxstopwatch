import noSleep from './noSleep'
import formatTime from './formatTime'
import ReconnectingWebSocket from 'reconnectingwebsocket'
import {toggleFullScreen} from './fullScreen'

const state = {
  format: 'hh:mm:ss:.d0',
}

const constants = {
  updateTime: 50,
  reconnectAttemptInterval: 2000,
}

document.addEventListener('dblclick', toggleFullScreen)

noSleep(document.getElementById('message'))

const displayTime = (time) => {
  document.getElementById('time').innerHTML = time
}

const getDistance = () => (state.play ? new Date().getTime() : state.stop) - state.start

const handleTime = () => {
  displayTime(formatTime(getDistance(), state.format))
}

let steps

const stopwatch = (newState) => {
  const playChange = state.play != newState.play
  Object.assign(state, newState)

  if (playChange) {
    steps = setInterval(handleTime, constants.updateTime)
  } else {
    clearInterval(steps)
    handleTime()
  }
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