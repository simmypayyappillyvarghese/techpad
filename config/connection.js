require('dotenv').config();
const Sequelize = require('sequelize');


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

/*Ran with following as JawsDB URL was not connecting */
/*
sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'n4m3x5ti89xl6czh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306
  }
);

env details

DB_USER=key7yq7huc4pqhde
DB_PASSWORD=f4cb3zpkh5g47z49
DB_NAME=yv2rhbk9wc79bikb

*/
module.exports = sequelize;