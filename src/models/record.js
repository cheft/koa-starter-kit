const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')
const User = require('./user')
const Topic = require('./topic')

/**
 * 帖子操作记录
 */
module.exports = sequelize.define('record', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  // 操作类型，1-like, 2-hate, 3-report, 4-share(暂时不做分享)
  type: {
    type: Sequelize.INTEGER
  },
  
  // 操作人
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  // 操作贴
  topicId: {
    type: Sequelize.INTEGER,
    references: {
      model: Topic,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
})
