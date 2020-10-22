const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/blogs', require('./blogs'));

module.exports = router;