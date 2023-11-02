/**
 * Defines the router for accounts resources.
 */
const router = require("express").Router();
const controller = require("./accounts.countroller");

router.route("/").get(controller.list).post(controller.create);
router.route("/:acount_id").get(controller.read).put(controller.update);

module.exports = router;
