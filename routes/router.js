module.exports = (app) => {
  const tutorials = require("../controllers/tutorialController.js");
  const user = require("../controllers/userController");
  let router = require("express").Router();
  // User Router
  router.post("/register",user.register);
  router.post("/login", user.login);
  // Tutorial Router
   router.get("/", tutorials.findAllorTitle);
   router.post("/", tutorials.create);
   router.delete("/", tutorials.deleteAll);
  // router.get("/:id",tutorials.findOne);
  // router.post("/:id",tutorials.update);
   app.use("/", router);
};