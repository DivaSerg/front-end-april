var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)




server.use(jsonServer.rewriter({
  '/api/v1/articles': '/articles', // get all articles 	
  '/api/v1/articles/:id': '/articles/:id', // get article by id
  '/api/v1/articles/:id/edit': '/articles/:id/edit', // get article by id
  '/api/v1/articles/:id/like': '/articles/:id', // set like to article
  '/api/v1/articles/:id/comments': '/articles/:id/comments', // add comments to article
}))

server.use(router)
server.listen(3050, function () {
  console.log('JSON Server is running')
})
