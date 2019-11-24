const ip = require('ip')

const server = {
	port: 3000,
	ip: ip.address(),
}

const state = {
	start: 0,
	stop: 0,
	play: false,
	format: 'hh:mm:ss:d0',
}

const constants = {
	max : 356400000,
}
server.url = `http://${server.ip}:${server.port}/`

module.exports = {state, constants, server}