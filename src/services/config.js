const Model = require('../models/config')

module.exports = {

  /**
   * 通过类型获取配置项
   */
  get: function(type) {
    return Model.find({ where: { type: type }})
  }
}
