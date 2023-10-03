const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getAccounts);

module.exports = router;
