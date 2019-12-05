const ip = require('ip')

const initServer = {
	port: 8080,
	ip: ip.address(),
}

const serverClass = function(init) {

	Object.assign(this, init)
	this.getURL = () => {
		return `http://${this.ip}${this.port == 80 ? '' : `:${this.port}`}/`
	}

}

const server = new serverClass(initServer)

const constants = {
	updateTime: 50,
}

module.exports = {constants, server}