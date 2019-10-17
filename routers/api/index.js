const router = require("express").Router();
const connectRoutes = require("./connect.router");
const appRoutes = require("./apps.router");
router.use("/connect", connectRoutes);
router.use("/apps", appRoutes);
module.exports = router;
