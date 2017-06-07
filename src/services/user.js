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
  register: async function(user) {
    var result = await this.checkUsername(user.username)
    if (result) {
      return { code: '001', msg: '用户名已存在', data: false }
    }
    try {
      var user = await Model.create(user)
    } catch (e) {
      console.log(e)
      return { code: '002', msg: '注册失败', data: false }
    }
    return { code: '000', msg: '注册成功', data: false }
  },

  /**
   * 查看用户贡献排行
   * limit: 前多少位
   */
  ranking: function(limit) {

  },

  /**
   * 获取当前登录用户
   */
  getLogin: function() {
    // :TODO
    var username = 'cheft'
    return this.getUser(username)
  },

  /**
   * 根据用户名获取用户
   */
  getUser: function(username) {
    return Model.findOne({ where: { username: username } })
  },

  /**
   * 检查用户名是否被占用，被占用返回 true
   */
  checkUsername: async function(username) {
    var user = await this.getUser(username)
    if (user) return true
    return false
  }
}
