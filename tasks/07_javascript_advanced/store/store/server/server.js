var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var bodyParser = require('body-parser')
var middlewares = jsonServer.defaults()

server.use(bodyParser.json())
server.use(middlewares)



server.use(jsonServer.rewriter({
  '/api/v1/goods': '/goods', // get all articles 	
}))

server.use(router)
server.listen(3050, function () {
  console.log('JSON Server is running')
})
