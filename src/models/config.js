const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

/**
 * 系统配置表
 */
module.exports = sequelize.define('config', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  // 配置类型，1-system, 2-report, ...
  
  type: {
    type: Sequelize.INTEGER
  },
  
  // 配置项
  value: {
    type: Sequelize.STRING
  }
})
