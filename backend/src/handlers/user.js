const {createUser, checkLogin} = require("../utils/firebase");


const userLogin = (req, res) => {
    const user = req.body;
    if (!user || !user.email || !user.password)
        return void res.send({success: false});
    checkLogin(user.email, user.password).then((result) => {
        res.send({success: result});
    })
}

const userGoogleLogin = (req, res) => {
    res.send("not available for now");
}

const userRegister = (req, res) => {
    const user = req.body;
    if (!user || !user.email || !user.name || !user.password || !user.surname)
        return void res.send({success: false});
    createUser(user.name, user.surname, "", user.email, user.password).then((result) => {
        res.send(result);
    })
}

module.exports = {
    userGoogleLogin,
    userLogin,
    userRegister
}