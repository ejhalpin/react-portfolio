const router = require("express").Router();
const connectController = require("../../controllers/connect.controller");

router.route("/").post(connectController.sendMessage);
router.route("/resume/:format").get(connectController.getResume);

module.exports = router;
