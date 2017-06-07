const router = require('koa-router')()
const service = require('../services/topic')

router.get('/', async function(cxt) {
  var shares = await service.list()
  cxt.body = shares
})

router.get('/:id', async function(cxt) {
  var id = cxt.params.id
  var share = await service.get(id)
  cxt.body = share
})

router.post('/', async function(cxt) {
  var share = cxt.request.body
  share = await service.create(share)
  cxt.body = share
})

router.put('/:id', async function(cxt) {
  var id = cxt.params.id
  var share = cxt.request.body
  var share = await service.update(id, share)
  cxt.body = share
})

router.delete('/:id', async function(cxt) {
  var id = cxt.params.id
  var result = await service.destroy(id)
  cxt.body = result
})

module.exports = router
