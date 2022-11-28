module.exports = (app) => {
  const tutorials = require("../controllers/controller.js");
  let router = require("express").Router();

  router.get("/", tutorials.findAllorTitle);
  router.post("/", tutorials.create);
  router.get("/:id",tutorials.findOne);
  router.post("/:id",tutorials.update);

  router.delete("/", tutorials.deleteAll);
  app.use("/", router);
};
