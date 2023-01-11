/** @format */

const { Post } = require("../models");

const postData = [
  {
    title: "Models",
    post_content:
      "Models create objects that organize stored data to make it easier to reuse",
    user_id: 1,
    post_time: "2022-11-15 11:11:11",
  },
  {
    title: "Views",
    post_content: "Views give the display and interactions for a client",
    user_id: 2,
    post_time: "2022-11-22 11:12:11",
  },
  {
    title: "Controller",
    post_content: "Controller helps control the models and views",
    user_id: 1,
    post_time: "2022-11-30 14:12:11",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
