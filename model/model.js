// module.exports = (sequelize, Sequelize) => {
//   const Tutorial = sequelize.define("Tutorial", {
//     title: {
//       type: Sequelize.STRING,
//     },
//     description: {
//       type: Sequelize.STRING,
//     },
//     published: {
//       type: Sequelize.BOOLEAN,
//     },
//   });
//   return Tutorial;
// };
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TutorialSchema = new Schema({
  title: String,
  description: String,
  published: Boolean
})
 module.exports = mongoose.model('TutorialSchema',TutorialSchema);