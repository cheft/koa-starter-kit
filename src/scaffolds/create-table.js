const fs = require('fs')
const path = require('path')

fs.readdirSync(path.resolve(__dirname, '../models')).forEach(function(file) {
  if (file.indexOf('.js') !== -1) {
    require('../models/' + file).sync({force: true})
  }
})
