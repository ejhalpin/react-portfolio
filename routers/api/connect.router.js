const router = require("express").Router();
const connectController = require("../../controllers/connect.controller");

router.route("/").post(connectController.sendMessage);

module.exports = router;
