const Max = require('max-api')
const WebSocket = require('ws')
const state = require('./state')

const wss = new WebSocket.Server({ port: 7474 })

const broadcast = (data, ws) => {
	if (ws === undefined) {		
		wss.clients.forEach(ws => {
			ws.send(data)
		})
	} else {
		ws.send(data)
	}
}

wss.on('connection', (ws, req) => {
	Max.post('New device connected')
	broadcast(JSON.stringify({
		start: state.start,
		play: state.play,
		message: 'playPause',
	}), ws)

	ws.on('message', (message) => {Max.post(message)})

	ws.on('close', () => {
		Max.post('Connection closed')
		// ws.terminate()
	})

})

process.on('exit', () => {
	wss.clients.forEach(ws => {
		ws.close()
	})
})

module.exports = {broadcast}