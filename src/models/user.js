const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

/**
 * 用户
 */
module.exports = sequelize.define('user', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  username: { 
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      is: /^[a-zA-Z]\w{5,17}$/i // 字母开头，长度在6~18之间，只能包含字符、数字和下划线
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  name: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.INTEGER
  },

  avatar: {
    type: Sequelize.STRING
  },

  // 状态
  status: {
    type: Sequelize.INTEGER, // 0 禁用, 1 正常, 2 异常
    defaultValue: 1
  },

  // 经验
  experience: {
    type: Sequelize.BIGINT
  },

  // 等级
  level: {
    type: Sequelize.INTEGER
  },

  // 等级称号，还有多种荣耀等
  levelTitle: {
    type: Sequelize.STRING
  },

  role: {
    type: Sequelize.STRING, // normal, admin, manager
    defaultValue: 'normal',
  },

  // 未读公告 id, 以分号隔开, 如：'123, 124, 129'
  unReadNoticeIds: {
    type: Sequelize.STRING
  }
})
