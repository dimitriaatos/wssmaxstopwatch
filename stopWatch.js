const state = require('./src/server/state')
const Max = require('max-api-or-not')

Max.getDict('stopWatch').then(dict => {
	state.init = dict
	state.server.server = require('./src/server/server')()
	require('./src/server/ws')
	require('./src/server/handlers')()
	Max.noMax && require('./src/server/cli')
})
