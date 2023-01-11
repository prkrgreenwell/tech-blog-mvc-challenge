/** @format */

const { Comment } = require("../models");
const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment_text: "This is very helpful thank you",
    comment_time: "2022-12-15 11:11:11",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "I feel like you could explain this better",
    comment_time: "2022-12-22 11:12:11",
  },
  {
    user_id: 3,
    post_id: 1,
    comment_text: "Heck yeah my dude",
    comment_time: "2022-12-30 14:12:11",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
