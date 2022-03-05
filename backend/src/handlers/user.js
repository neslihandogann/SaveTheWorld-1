const {createUser, checkLogin} = require("../utils/firebase");


const userLogin = (req, res) => {
    const user = req.body;
    checkLogin(user.email, user.password).then((result) => {
        res.send({success: result});
    })
}

const userGoogleLogin = (req, res) => {
    res.send("not available for now");
}

const userRegister = (req, res) => {
    //!todo check inputs if they are empty send status false
    const user = req.body;
    createUser(user.name, user.surname, "", user.email, user.password).then((result) => {
        res.send(result);
    })
}

module.exports = {
    userGoogleLogin,
    userLogin,
    userRegister
}