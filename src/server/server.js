const Max = require('max-api')

const {server} = require('./state')

const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, './../../public')

app.use(express.static(publicPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

const listen = () => app.listen(server.port, () => {
  Max.outlet(['url', server.url])
  Max.post(`Listening on ${server.url}`)
})

module.exports = listen