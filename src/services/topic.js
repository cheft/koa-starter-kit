const Model = require('../models/topic')

module.exports = {
  /**
   * 获取分享贴列表，分页
   * page: 页码
   */
  list: function(page) {
    return Model.findAll()
  },

  /**
   * 获取详细分享贴内容
   * id: 分享贴 id
   */
  get: function(id) {
    return Model.findById(id)
  },
  
  /**
   * 更新
   */
  update: function(id, share) {
    return Model.update(share, { where: { id: id }})
  },
  
  /**
   * 创建
   */
  create: function(share) {
    return Model.create(share)
  },

  /**
   * 删除
   */
  destroy: function(id) {
    return Model.destroy({ where: { id: id }})
  },

  /**
   * 根据日期查看排行榜,一周或一月，类似于炉石、王者荣耀机制
   * date:日期, limit: 前多少位
   */
  ranking: function(date, limit) {
    
  },

  /**
   * 获取当前用户的所有收藏贴，分页
   * page: 页码
   */
  collect: function(page) {

  }
}
