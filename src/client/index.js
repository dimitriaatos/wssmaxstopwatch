import './noSleep'
import fullScreen from 'fullscreen.js'
import SyncWatch from '@dimitriaatos/syncwatch/client/src'
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

const connection = (mode = true) => {
	document.getElementById('noConnection').style.display = mode ? 'none' : 'block'
}

watch.on('connection', () => connection(true))
watch.on('disconnection', () => connection(false))