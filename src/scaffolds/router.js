const fs = require('fs')
const path = require('path')

// 所有路由前缀都加 api
const router = require('koa-router')({prefix: '/api'})

// 自动绑定 routers 目录下的路由信息
fs.readdirSync(path.resolve(__dirname, '../routers')).forEach(function(file) {
  if (file.indexOf('.js') !== -1) {
    var name = file.split('.')[0]
    var subRouter = require('../routers/' + name)

    // 如果 subRouter 自定义了 prefix 则用它的，否则用 name + 's'
    var prefix = subRouter.opts.prefix ? '/' : '/' + name + 's'
    router.use(prefix, subRouter.routes())
  }
})

module.exports = router
