const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account");

router.post("account", accountController);

module.exports = router;
