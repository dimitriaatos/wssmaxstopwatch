import noSleep from './noSleep.js'
console.log('WakeLock' in window)
const state = {
  start: undefined,
  stop: undefined,
  play: false,
}

noSleep(document.getElementById('message'))

const timeFormat = (...args) => {
  let timeString = ''
  for (const num of args) {
    timeString = timeString.concat(num > 9 ? num : '0' + num, ':')
  }
  return timeString.slice(0, 11)
}

const displayTime = (distance) => {
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)
  const centiseconds = Math.floor((distance / 100) % 10)
  document.getElementById('time').innerHTML = timeFormat(hours, minutes, seconds) + centiseconds + '0'
}

const calcTime = () => {
  const now = new Date().getTime()
  const distance = now - state.start
  displayTime(distance)
}

let steps

const stopwatch = (newState, message) => {
  switch (message) {
    case 'playPause':
      if (newState.play) {
        steps = setInterval(calcTime, 50)
      } else {
        clearInterval(steps)
      }
      break
    case 'reset':
      displayTime(0)
      break
  }

  Object.assign(state, newState)
}

const maxSocket = new WebSocket('ws://localhost:7474')

maxSocket.onopen = (event) => {
	console.log('sending data...')
	// maxSocket.send('Message from the browser')
}

maxSocket.onmessage = (event) => {
  const {message, ...newState} = JSON.parse(event.data)
  stopwatch(newState, message)
}

const noConnection = (mode = true) => {
  document.getElementById('noConnection').style.display = 'block'
}

maxSocket.onclose = (event) => {
  // maxSocket.send('Closing connection from browser')
  stopwatch({play: false}, 'playPause')
  stopwatch({}, 'reset')
  noConnection(true)
}

window.onbeforeunload = () => {
  maxSocket.onclose()
  websocket.close()
}