const PORT = process.env.PORT || 3001;
// // import the Sequelize constructor from the library
// const Sequelize = require('sequelize');

// // create connection to our database, pass in your MySQL information for username and password
// const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });

// module.exports = sequelize;

// // The new Sequelize() function accepts the database name, MySQL username, and MySQL password (respectively) as parameters, 
// // then we also pass configuration settings. Once we're done, we simply export the connection.

const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;
