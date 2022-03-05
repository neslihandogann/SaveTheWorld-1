require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const accessCheck = (req, res, next) => {
    return void next();
    // jwt api access control disabled
    try {
        const decoded = jwt.verify(req.body.token, process.env.API_SECRET_KEY)
        if (decoded.key === process.env.API_KEY) {
            delete decoded.key;
            req.jwt = decoded;
            return void next();
        }
    } catch (e) {

    }
    res.status(401).json({error: "unauthorized"}).send();
}

module.exports = {accessCheck};