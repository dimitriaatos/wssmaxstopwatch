import NoSleep from 'nosleep.js'

const state = {
  start: undefined,
  stop: undefined,
  play: false,
}

const noSleep = new NoSleep()
const noSleepButton = document.getElementById('noSleep')

noSleepButton.addEventListener('click', () => {
  // noSleepButton.removeEventListener('click', enableNoSleep, false)
  noSleepButton.style.display = 'none'
  noSleep.enable()
}, false)

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

let steps;

const stopwatch = (message, newState, start) => {
  switch (message) {
    case 'playPause':
      if (state.play != newState.play) {
        if (newState.play) {
          if (state.start != undefined && state.stop != undefined) start = start - (state.stop - state.start)
          steps = setInterval(calcTime, 50)
          newState.start = start
        } else {
          clearInterval(steps)
          newState.stop = start
        }
      }
      break
    case 'reset':
      displayTime(0)
      state.start = start
      newState.stop = undefined
      break
  }

  Object.assign(state, newState)
}

const maxSocket = new WebSocket('ws://localhost:7474')

maxSocket.onopen = (event) => {
	console.log('sending data...')
	maxSocket.send('Message from the browser')
}

maxSocket.onmessage = (event) => {
  const {message, start, ...newState} = JSON.parse(event.data)
  stopwatch(message, newState, start)
}

maxSocket.onclose = (event) => {
  maxSocket.send('Closing connection from browser')
}

window.onbeforeunload = () => {
  maxSocket.onclose()
  websocket.close()
}