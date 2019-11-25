const express = require('express')
const path = require('path')
const Max = require('max-api')

const {server} = require('./src/server/state')
const copyUrl = require('./src/server/copyUrl')
require('./src/server/handlers')()

const app = express()
const publicPath = path.join(__dirname, '/public')

app.use(express.static(publicPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(server.port, () => {
	Max.outlet(['url', server.url])
	copyUrl()
})