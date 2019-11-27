const ip = require('ip')

const initServer = {
	port: 8080,
	ip: ip.address(),
}

const serverClass = function(init) {

	Object.assign(this, init)
	this.getURL = () => {
		return `http://${this.ip}:${this.port}/`
	}

}

const server = new serverClass(initServer)

const state = {
	start: 0,
	stop: 0,
	play: false,
	format: 'hh:mm:ss.d0',
}

const constants = {
	max : 356400000,
}

module.exports = {state, constants, server}