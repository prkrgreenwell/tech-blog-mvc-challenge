/** @format */

const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dasboard", dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
