import './noSleep'
import ReconnectingWebSocket from 'reconnectingwebsocket'
import fullScreen from 'fullscreen.js'
import SyncWatch from '@dimitriaatos/syncwatch'
import hideMouse from 'hide-mouse'
const timesync = require('timesync/dist/timesync')

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

const ts = timesync.create({
	server: '/timesync',
	delay: 1000,
	interval: 5000
})

setTimeout(() => {
	ts.destroy()
}, 10000)

// Stopwatch
const watch = new SyncWatch(time => {
	document.getElementById('time').innerHTML = time.formatted
}, {offset: ts.now() - Date.now()})

ts.on('change', () => {
	watch.offset = ts.now() - Date.now()
})

const noConnection = (mode = true) => {
	document.getElementById('noConnection').style.display = mode ? 'block' : 'none'
}

// WebSocket connection
const maxSocket = new ReconnectingWebSocket(`ws://${window.location.host}`)

maxSocket.timeoutInterval = constants.reconnectAttemptInterval

maxSocket.onopen = () => {
	noConnection(false)
}

maxSocket.onmessage = (event) => {
	watch.update(JSON.parse(event.data))
}

maxSocket.onclose = () => {
	// watch.toggle(false)
	// watch.reset()
	noConnection(true)
}

window.onbeforeunload = () => {
	maxSocket.onclose()
	maxSocket.close()
}