/** @format */

const sequelize = require("../config/connection");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await userData();
  console.log("\n----- USERS SEEDED -----\n");
  await postData();
  console.log("\n----- POSTS SEEDED -----\n");
  await commentData();
  console.log("\n----- COMMENT SEEDED -----\n");

  process.exit(0);
};

seedAll();
