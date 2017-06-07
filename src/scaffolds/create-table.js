const fs = require('fs')
const path = require('path')

require('../models/config').sync({force: true})
require('../models/user').sync({force: true}).then(function() {
  require('../models/glory').sync({force: true})
  require('../models/chat').sync({force: true})
  require('../models/notice').sync({force: true})
  require('../models/topic').sync({force: true}).then(function() {
    require('../models/record').sync({force: true})
  })
})
