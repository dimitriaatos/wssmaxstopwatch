const Max = require('max-api-or-not')
const WebSocket = require('ws')
const serverWatch = require('./serverWatch')
const {server: {server}} = require('./state')

const wss = new WebSocket.Server({ server })

const broadcast = (data, ws) => {
	data = JSON.stringify(data)
	if (ws == undefined) {		
		wss.clients.forEach(ws => {
			ws.send(data)
		})
	} else {
		ws.send(data)
	}
}

wss.on('connection', (ws) => {
	Max.post('New device connected')
	broadcast(serverWatch.output(), ws)

	ws.on('message', (message) => {Max.post(message)})

	ws.on('close', () => {
		Max.post('Connection closed')
		// ws.terminate()
	})

	ws.on('error', err => console.log(err))

})

process.on('exit', () => {
	wss.clients.forEach(ws => {
		ws.close()
	})
})

module.exports = {broadcast}