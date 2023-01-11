/** @format */

const { User } = require("../models");

const userData = [
  {
    username: "pgreenwell",
    email: "pgreenwell@mail.com",
    password: "password1234",
  },
  {
    username: "dottydottydoo",
    email: "dorothyjane@mail.com",
    password: "thisismypassword44",
  },
  {
    username: "maddymaeham",
    email: "mmmmaddy@mail.com",
    password: "i8panckes",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports;
