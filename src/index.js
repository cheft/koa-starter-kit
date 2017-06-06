const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('./scaffolds/router')
const app = new Koa()

app.use(bodyparser({ formLimit: '20mb', jsonLimit: '20mb' }))
app.use(router.routes())
app.listen(3000)
