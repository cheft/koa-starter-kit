const router = require('koa-router')()
const service = require('../services/user')

router.get('/', async function(cxt) {
  cxt.body = 'test users list'
})

router.post('/login', async function(cxt) {
  cxt.body = 'logic'
})

router.post('/register', async function(cxt) {
  var user = cxt.request.body
  var result = await service.register(user)
  cxt.body = result
})

router.post('/check', async function(cxt) {
  var username = cxt.request.body.username
  if (!username) {
    return cxt.body = { code: '002', msg: '用户名非法', data: false }
  }
  var result = await service.checkUsername(username)
  if (result) {
    return cxt.body = { code: '001', msg: '用户名已存在', data: false }
  }
  return cxt.body = { code: '000', msg: '用户名可用', data: true} 
})

module.exports = router
