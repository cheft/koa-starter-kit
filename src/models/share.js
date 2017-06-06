const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('share', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  title: { type: Sequelize.STRING },
  content: { type: Sequelize.STRING },
})
