const { Sequelize } = require('sequelize');
require('dotenv').config()
const cors = require('cors')
const pass=process.env.Pass
// console.log(pass)
const sequelize = new Sequelize("sql12599947", "sql12599947", "mL5rTrVzs7", {
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log("Connection succesfull to db")
}).catch((err) => {
    console.log("Failed to connect to db")
    console.log(err)
})
module.exports = { sequelize }



