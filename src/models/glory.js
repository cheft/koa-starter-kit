const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

/**
 * 用户荣耀，:TODO
 */
module.exports = sequelize.define('topic', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
})
