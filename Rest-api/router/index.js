const router = require("express").Router();
const users = require("./users");
const dishes = require("./dishes");
const admins = require("./admins")

router.use("/users", users);
router.use("/dishes", dishes);
router.use("/admins", admins);

module.exports = router;