const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 13),
    });

    const newUser = await user.save();

    const token = jwt.sign({ id: newUser["id"] }, process.env.JWT, {
      expiresIn: "1 day",
    });

    res.status(200).json({
      user: newUser,
      message: "User Created",
      token,
    });
  } catch (err) {
    res.status(500).json({
      ERROR: err.message,
    });
  }
});

module.exports = router;
