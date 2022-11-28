const express = require("express");
const config  = require("././config/config");
const cors    = require('cors');
const db      = require("./model/");
const app     = express();
/**
 *  Feature : This code allows you to access the server
              In detail, 3001 port can fetch this server
 *  Reason  : If you don't have cors, you will have an error owing to browser security
 * 
 */
app.use(cors({
    origin: '*' //FrontEnd port : 3001 
}));
//end
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  require("./routes/router")(app);
// app.get("/", (req, res) => {
//     res.send("Hello world");
// })


app.listen(config.app.port);


