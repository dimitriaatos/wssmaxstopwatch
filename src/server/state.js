const ip = require('ip')

const state = {
	port: 3000,
	ip: ip.address(),
	start: undefined,
	stop: undefined,
	play: false,
}
state.url = `http://${state.ip}:${state.port}/`

module.exports =  state