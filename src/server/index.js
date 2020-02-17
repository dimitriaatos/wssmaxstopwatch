const Max = require('max-api')
const ServerWatch = require('@dimitriaatos/syncwatch/server')
const listen = require('./server')
const state = require('./state')

Max.getDict('stopWatch').then(dict => {
	
	state.server = listen()

	const watch = new ServerWatch(
		time => Max.outlet(['time', time.ms]),
		{server: state.server, cli: false, ...dict}
	)

	watch.on('connection', () => Max.post('Device connected'))
	watch.on('disconnection', () => Max.post('Device disconnected'))

	require('./handlers')(watch)
})