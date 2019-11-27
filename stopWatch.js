const {server} = require('./src/server/state')
require('./src/server/handlers')()
server.service = require('./src/server/server')()