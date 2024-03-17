const express = require("express");
const router = express.Router();
const authController = require("../server/controller/auth");

router.post("/",  (req, res) => {
	return  authController.auth(req.body,res);
});



module.exports = router;