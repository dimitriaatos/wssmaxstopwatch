const express = require('express')
const path = require('path')
const ip = require('ip')

const WebSocket = require('ws')
const Max = require('max-api')
const clipboard = require('clipboardy')

const app = express()
const publicPath = path.join(__dirname, '/public')

app.use(express.static(publicPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

const state = {
	port: 3000,
	ip: ip.address(),
}
state.uri = `http://${state.ip}:${state.port}/`

const copyUri = () => {
	clipboard.writeSync(state.uri)
	Max.post(`${state.uri} copied to clipboard`)
}

const wss = new WebSocket.Server({ port: 7474 })

wss.on('connection', (ws, req) => {

	ws.on('message', (message) => {Max.post(message)})

	ws.on('close', () => {
	})

	const terminate = () => {
		// Max.removeHandlers('play')
		// Max.removeHandlers(Max.MESSAGE_TYPES.BANG)
		Max.post('Connection terminated')
		ws.terminate()
	}

	Max.addHandler('play', (toggle) => {
		ws.send(JSON.stringify({
			start: new Date().getTime(),
			play: !!toggle,
			message: 'playPause',
		}))
	})

	Max.addHandler(Max.MESSAGE_TYPES.BANG, () => {
		ws.send(JSON.stringify({
			start: new Date().getTime(),
			message: 'reset',
		}))
	})

	Max.addHandler('copy', () => {
		copyUri()
	})

	Max.addHandler('uri', () => {
		Max.outlet(['uri', state.uri])
	})

})

app.listen(state.port, () => {
	Max.outlet(['uri', state.uri])
	copyUri()
})