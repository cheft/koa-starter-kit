const Sequelize = require('sequelize')
const sequelize = require('../utils/sequelize')

module.exports = sequelize.define('user', {
  // id: { type: Sequelize.UUID, primaryKey: true}, // UUID 不能自动生成
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING }
})
