import NoSleep from 'nosleep.js'
import {uiEventListener} from 'uievents'

const preventFromSleeping = () => {
	let wakeLock
	if ('getWakeLock' in navigator) {

		navigator.getWakeLock('screen').then((wl) => {
			wakeLock = wl.createRequest()
		})
	} else if ('requestWakeLock' in navigator) {

		wakeLock = navigator.requestWakeLock('screen')
	} else if (typeof window.WakeLock == 'object') {

		const controller = new AbortController()
		const signal = controller.signal
		window.WakeLock.request('screen', {signal})
		wakeLock = controller
	} else if ('wakeLock' in navigator) {
		wakeLock = navigator.wakeLock.request('screen')
	} else {
		console.log('Wake Lock API not supported')
		const noSleep = new NoSleep()
		uiEventListener(() => {
			noSleep.enable()
			console.log('noSleep enabled')
		})
	}

	return wakeLock
}

preventFromSleeping()

// export default noSleep