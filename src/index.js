const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('./scaffolds/router')
const app = new Koa()

app.use(bodyparser({ formLimit: '20mb', jsonLimit: '20mb' }))
app.use(router.routes())

// response
app.use(function(cxt, next, a) {
  console.log(cxt)
})

app.listen(4000, function(err) {
  console.log('> Ready on http://localhost:4000')
})
