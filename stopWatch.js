const express = require('express')
const path = require('path')

const WebSocket = require('ws')

const Max = require('max-api')

const app = express()
const publicPath = path.join(__dirname, '/public')

app.use(express.static(publicPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

const wss = new WebSocket.Server({ port: 7474 })

wss.on('connection', (ws, req) => {

	ws.on('message', (message) => {
		console.log('received: %s', message)
	})

	ws.on('close', () => {
		Max.removeHandlers('send')
		console.log('Connection closed')
		ws.terminate()
	})

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
})

app.listen(3000, () => {
  const onlineMessage = 'http://localhost:3000/'
  Max.post(onlineMessage)
})