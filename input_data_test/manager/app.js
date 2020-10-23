const net = require('net')
const osc = require('node-osc')
const server = net.createServer()
const client = new osc.Client('127.0.0.1', 8010)

let i = 1
server.listen(8888, '0.0.0.0', function() {
  console.log('server listening on %j', server.address())
  
  setInterval(() => {
    i++
    client.send('/ddd',[2+i,2+i,3+i])
    console.log(i)
  }, 10);
 
})



