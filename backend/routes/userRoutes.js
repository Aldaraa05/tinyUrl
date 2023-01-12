const express = require("express");
const model = require("mongoose");
const {
  createUser,
  getUser,
  getUsers,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router
  .get("/users", getUsers)
  .get("/user/:id", getUser)
  .post("/signup", createUser)
  .post("/login", loginUser);

exports.userRouter = router;
