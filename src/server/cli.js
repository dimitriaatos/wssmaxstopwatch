const readline = require('readline')
const {broadcast} = require('./ws')
const serverWatch = require('./serverWatch')
const opn = require('opn')
const {server} = require('./state')
const copyUrl = require('./copyUrl')
const listen = require('./server')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const EventEmitter = require('events')

const ee = new EventEmitter()
ee.on('open', () => opn(server.url))
ee.on('url', () => console.log(server.url))
ee.on('copy', copyUrl)
ee.on('port', (port) => {
	server.port = port
	server.service.close()
	server.service = listen()
})

;['play', 'pause', 'start', 'stop'].forEach(
	cmd => ee.on(
		cmd,
		() => broadcast(serverWatch[cmd]())
	)
)

ee.on('toggle', (toggle) => broadcast(serverWatch.toggle(toggle)))
ee.on('reset', (time) => broadcast(serverWatch.reset(time)))
ee.on('set', (time) => broadcast(serverWatch.reset(time)))
ee.on('format', (format) => {
	serverWatch.format = format
	broadcast(serverWatch.output())
})

const cli = (answer) => {
	ee.emit(...answer.split(' '))
	rl.question('', cli)
}

rl.question('', cli)