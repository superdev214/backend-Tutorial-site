const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
/*
@ ----  MySql data  ----
const Sequelize = require("Sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.tutorials = require("./model.js")(sequelize, Sequelize);
  */
mongoose.connect(dbConfig.url, 
  { 
    useNewUrlParser: true ,
    // useUnifiedTopology: true,
    // useCreateIndex:true,
    // useFindAndModify: false,
  });
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected", dbConfig.url);
});
db.on("error", (err) => {
  console.log("DB connection failed.")
  console.log(err);
});
module.exports = db;
