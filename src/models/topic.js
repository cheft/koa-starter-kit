const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')
const User = require('./user')

/**
 * 帖子
 */
module.exports = sequelize.define('topic', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  title: { type: Sequelize.STRING(1000) },
  content: { type: Sequelize.TEXT },

  // :TODO 类型，暂时不做，后期再加
  category: {
    type: Sequelize.STRING
  },

  // 发贴人
  authorId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },

  // 点赞分值, 点赞+1, 被踩-1
  likeCount: {
    type: Sequelize.INTEGER
  },

  // 被举报次数
  reportCount: {
    type: Sequelize.INTEGER
  }
  
})
