const Model = require('../models/user')

module.exports = {
  /**
   * 登录
   */
  login: function() {

  },

  /**
   * 注册，考虑数据校验的以及用户名被占用的问题
   */
  register: function(user) {
    return Model.create(user)
  },

  /**
   * 查看用户贡献排行
   * limit: 前多少位
   */
  ranking: function(limit) {

  },

  /**
   * 获取当前用户的所有收藏贴，分页
   * page: 页码
   */
  collect: function(page) {

  }
}
