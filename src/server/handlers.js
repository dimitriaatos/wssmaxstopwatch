const Max = require('max-api')
const {server} = require('./state')
const {broadcast} = require('./ws')
const copyUrl = require('./copyUrl')
const listen = require('./server')
const serverWatch = require('./serverWatch')

module.exports = () => {

  Max.addHandler('play', (toggle) => {
    if (serverWatch.playing != toggle) {
      broadcast(serverWatch.play(toggle))
    }
  })
  
  Max.addHandler(Max.MESSAGE_TYPES.BANG, () => {
    broadcast(serverWatch.reset())
  })

  Max.addHandler('set', (ms) => {
    broadcast(serverWatch.reset(ms))
  })

  Max.addHandler('format', (format) => {
    serverWatch.format = format
    broadcast(serverWatch.output())
  })
  
  Max.addHandler('copy', () => {
    copyUrl()
  })
  
  Max.addHandler('url', () => {
    Max.outlet(['url', server.getURL()])
  })

  Max.addHandler('port', (port) => {
    server.port = port
    server.service.close()
    server.service = listen()
  })

}