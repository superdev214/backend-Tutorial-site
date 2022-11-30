module.exports = (app) => {
  const tutorials = require("../controllers/controller.js");
  let router = require("express").Router();



  // Control Tutorial
   router.get("/", tutorials.findAllorTitle);
   router.post("/", tutorials.create);
   router.delete("/", tutorials.deleteAll);
  // router.get("/:id",tutorials.findOne);
  // router.post("/:id",tutorials.update);
   app.use("/", router);
};