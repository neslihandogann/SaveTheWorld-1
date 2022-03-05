require("dotenv").config();
const jwt = require("jsonwebtoken");

const token = jwt.sign({
    key: process.env.API_KEY,
    name: "super",
    surname: "hero",
    mail: "bdptxjyptl@midiharmonica.com",
    pass: "123456"
}, process.env.API_SECRET_KEY, {expiresIn: '1h'})

console.log(token);