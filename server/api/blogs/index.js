const express = require('express');
const router = express.Router();
const blogController = require("./blog.controller")

router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getCustomBlog);

module.exports = router;