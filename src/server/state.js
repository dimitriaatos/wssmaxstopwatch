const ip = require('ip')

const server = {
	port: 8080,
	ip: ip.address(),
	get url() {
		return `http://${this.ip}${this.port == 80 ? '' : `:${this.port}`}/`
	}
}

const constants = {
	updateTime: 50,
}

module.exports = {constants, server, init: {}}