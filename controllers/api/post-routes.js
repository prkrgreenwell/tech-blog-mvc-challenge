/** @format */

const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

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

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["comment_text", "comment_time"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
