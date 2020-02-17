const Max = require('max-api')
const express = require('express')
const path = require('path')
const state = require('./state')

const app = express()
const publicPath = path.join(__dirname, './../../public')

const sync = require('@dimitriaatos/syncwatch/sync')

app.use(express.static(publicPath))
app.use('/sync', sync)
app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'))
})

const listen = (port = state.PORT) => {
	try {state.server.close()}
	catch (e){'do nothing'}
	state.PORT = port
	return app.listen(state.PORT, () => {
		Max.post(`Listening on ${state.url}`)
		Max.outlet(['url', state.url])
	})
}

module.exports = listen