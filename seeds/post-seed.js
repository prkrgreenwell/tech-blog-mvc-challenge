/** @format */

const { Post } = require("../models");

const postData = [
  {
    title: "Models",
    post_text:
      "Models create objects that organize stored data to make it easier to reuse",
    post_time: "2022-11-15 11:11:11",
    user_id: 1,
  },
  {
    title: "Views",
    post_text: "Views give the display and interactions for a client",
    post_time: "2022-11-22 11:12:11",
    user_id: 2,
  },
  {
    title: "Controller",
    post_text: "Controller helps control the models and views",
    post_time: "2022-11-30 14:12:11",
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
