const express = require("express");
const router = express.Router();
const userController = require("../server/controller/user");

router.post("/",  (req, res) => {
	return  userController.create(req.body,res);
});

router.put("/:id",  (req, res) => {
	return userController.updateById(req.params.id, req.body ,res);
});

router.get("/:id",  (req, res) => {
	return  userController.getById(req.params.id,res);
});

module.exports = router;