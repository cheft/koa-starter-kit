const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')
const User = require('./user')

/**
 * 私信
 */
module.exports = sequelize.define('chat', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  fromUserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  toUserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  content: { type: Sequelize.STRING },
  read: {type: Sequelize.BOOLEAN},
  readAt: {
    type: Sequelize.DATE
  }
})
