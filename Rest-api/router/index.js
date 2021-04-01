const router = require("express").Router();
const users = require("./users");
const dishes = require("./dishes");
const admins = require("./admins");

router.use("/user", users);
router.use("/dishes", dishes);
router.use("/cms", admins);

module.exports = router;
