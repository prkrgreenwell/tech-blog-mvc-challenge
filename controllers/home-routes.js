/** @format */

const router = require("express").Router();
const { User } = require("../models");

//Login Screen
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
