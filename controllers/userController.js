const User = require("../model/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const jwt_key = config.jwt_key;
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
    jwt_key,
      { expiresIn: "2h" }
    );
    // // save user token
    user.token = token;
    // return new user
    res.status(200).send({msg:"success"});
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
  /**bcrypt password is temporary suspend */
};

exports.login = async (req, res) => {
  try {
    // Get user data
    const { email, password } = req.body;
    // Validate your input
    if (!(email && password)) res.status(400).send("All input is required");
    //Validate if the user exist in database
    const user = await User.findOne({ email });

    if (user && (await (password === user.password))) {
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
        },
        jwt_key,
        { expiresIn: "2h" }
      );
      // save user token
      user.token = token;

      res.status(200).send({
        msg : "success",
        user
      });
      
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};
