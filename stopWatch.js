const state = require('./src/server/state')
const Max = require('max-api-or-not')

Max.getDict('stopWatch').then(
	dict => {
		state.init = dict

		require('./src/server/handlers')()
		state.server.service = require('./src/server/server')()
	}
)