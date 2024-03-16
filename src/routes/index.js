var express = require("express");
var router = express.Router();
const response = require("../helper/response");

router.get("/", async (req, res) => {
	return await response.ok(res, {name:'teste'})
});

module.exports = router;