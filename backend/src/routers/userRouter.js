require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router({ strict: true });

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;