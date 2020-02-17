const ip = require('ip')

module.exports = {
	PORT: 80,
	get url() {
		return `http://${ip.address()}${this.PORT == 80 ? '' : `:${this.PORT}`}/`
	}
}