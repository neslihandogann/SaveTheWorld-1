const {createUser, checkLogin} = require("../utils/firebase");


const userLogin = (req, res) => {
    const token = req.jwt;
    checkLogin(token.mail, token.pass).then((result) => {
        res.send(result);
    })
}

const userGoogleLogin = (req, res) => {
    res.send("not available for now");
}

const userRegister = (req, res) => {
    const token = req.jwt;
    createUser(token.name, token.surname, "", token.mail, token.pass).then((result) => {
        res.send(result);
    })
}

module.exports = {
    userGoogleLogin,
    userLogin,
    userRegister
}