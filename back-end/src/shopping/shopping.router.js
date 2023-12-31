/**
 * Defines the router for accounts resources.
 */
const router = require("express").Router();
const controller = require("./shopping.controller");

router.route("/").get(controller.list).post(controller.create);
router.route("/:order_id").get(controller.read).put(controller.update);

module.exports = router;
