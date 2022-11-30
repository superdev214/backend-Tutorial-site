const auth = require("../middleware/auth");
module.exports = (app) => {
  const tutorials = require("../controllers/tutorialController.js");
  const user = require("../controllers/userController");
  let router = require("express").Router();
  // User Router
  router.post("/register",user.register);
  router.post("/login", user.login);
  // Tutorial Router
   router.get("/",    auth,tutorials.findAllorTitle);
   router.post("/",   auth,tutorials.create);
   router.delete("/", auth,tutorials.deleteAll);
  // router.get("/:id",tutorials.findOne);
  // router.post("/:id",tutorials.update);
   app.use("/", router);
};