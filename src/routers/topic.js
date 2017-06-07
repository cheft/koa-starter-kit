const router = require('koa-router')()
const service = require('../services/topic')

router.get('/', async function(cxt) {
  var list = await service.list()
  cxt.body = list
})

router.get('/:id', async function(cxt) {
  var id = cxt.params.id
  var topic = await service.get(id)
  cxt.body = topic
})

router.post('/', async function(cxt) {
  var topic = cxt.request.body
  share = await service.create(topic)
  cxt.body = topic
})

router.put('/:id', async function(cxt) {
  var id = cxt.params.id
  var topic = cxt.request.body
  var topic = await service.update(id, topic)
  cxt.body = topic
})

// 审核帖子
router.put('/:id/audit', async function(cxt) {
  var id = cxt.params.id
  var topic = cxt.request.body
  var topic = await service.update(id, topic)
  cxt.body = topic
})

router.delete('/:id', async function(cxt) {
  var id = cxt.params.id
  var result = await service.destroy(id)
  cxt.body = result
})

module.exports = router
