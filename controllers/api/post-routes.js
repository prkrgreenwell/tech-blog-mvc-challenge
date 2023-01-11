/** @format */

const router = require("express").Router();
const { Post, User } = require("../../models");

//CREATE Post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
