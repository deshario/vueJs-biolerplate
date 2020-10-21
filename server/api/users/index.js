const express = require('express');
const router = express.Router();
const userController = require("./user.controller")

router.get("/", userController.getUsers);
router.get("/:id", userController.getSingleUser);

module.exports = router;