const User = require("../model/user");
const jwt = require("jsonwebtoken");
// @ get Random string
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
exports.register = async (req, res) => {
  try {

    const { first_name, last_name, email, password } = req.body;
    // Validate user input
    if (!(email && password && first_name && last_name))
      res.status(400).send("All input is required");
    // check if user already exist
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.status(409).send("User already exist. Please Login");
    //@ User don't exist
    //@ Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password,
    });

    const token = jwt.sign(
      {
        user_id: user._id,
        email,
      },
      makeid(Math.random() % 10),
      { expiresIn: "2h" }
    );
    // save user token
    user.token = token;
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  /**bcrypt password is temporary suspend */
};
