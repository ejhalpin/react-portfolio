const router = require("express").Router();
const appController = require("../../controllers/apps.controller");

router.route("/").get(appController.getApps);

module.exports = router;
