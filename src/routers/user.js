const router = require('koa-router')()
const service = require('../services/user')

router.get('/', async function(cxt) {
  cxt.body = 'test users list'
})

router.post('/', async function(cxt) {
  var user = cxt.request.body
  user = await service.register(user)
  cxt.body = user
})

module.exports = router
