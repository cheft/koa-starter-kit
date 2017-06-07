const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')
const User = require('./user')

/**
 * 站内信或公告，这里与 chat 分表存储，方便定时清理数据
 * 如果 toUserId 为空，为公告
 */
module.exports = sequelize.define('notice', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},

  // 发信人，理论上是管理员，记录一下，方便以后查询处理人
  fromUserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  
  // 接信人
  toUserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  // 内容
  content: { type: Sequelize.STRING },

  // 是否已读；若为公告，此字段则无用，需要用到 User 的 unReadNoticeIds 
  read: {type: Sequelize.BOOLEAN}

})
