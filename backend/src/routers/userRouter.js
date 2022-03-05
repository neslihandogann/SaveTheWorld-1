require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const {accessCheck} = require("../middlewares/apiAccessCheck")
const {userLogin, userRegister, userGoogleLogin} = require("../handlers/user");
const router = express.Router({strict: true});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post("/login", accessCheck, userLogin)
router.post("/google-login", accessCheck, userGoogleLogin)
router.post("/register", accessCheck, userRegister)

module.exports = router;