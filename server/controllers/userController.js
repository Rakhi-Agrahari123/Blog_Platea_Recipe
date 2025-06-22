const User = require("../models/user");
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const userRegister = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPassword,
      profilePicture: req.file.cloudinaryUrl,
      // profilePicture: User.profilePicture,
      role,
    });

    await newUser.save();
    res.status(201).json({
      success: true,
      msg: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profilePicture: req.file?.cloudinaryUrl || "",
        role: newUser.role,
      },
    });

    console.log("Received body:", req.body);
console.log("Received file:", req.file);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const user = await User.findOne({ email });

    const errmsg = "Invalid email or password";

    // ✅ Check if user exists FIRST
    if (!user) {
      return res.status(401).json({ msg: errmsg });
    }

    // ✅ Then compare password
    const ismatchPassword = await bcrypt.compare(password, user.password);
    if (!ismatchPassword) {
      return res.status(401).json({ msg: errmsg });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        role:user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      success: true,
      msg: "Login successfully!",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        role:user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

const getMe = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ msg: "Invalid User ID" });
  }

  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({
      success: true,
      msg: `Welcome ${user.username}`,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { userRegister, userLogin, getMe };