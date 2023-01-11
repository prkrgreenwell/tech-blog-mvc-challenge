/** @format */

const seedUser = require("./comment-seed");
const seedPost = require("./post-seed");
const seedComments = require("./comment-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");
  await seedPost();
  console.log("\n----- POSTS SEEDED -----\n");
  await seedComments();
  console.log("\n----- COMMENT SEEDED -----\n");

  process.exit(0);
};

seedAll();
