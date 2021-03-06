require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 80;
const userApi = require("./routers/userRouter")
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// todo! origin will be the frontend url
app.use(cors({
    origin: '*'
}));

app.use("/api/user", userApi);

app.all("*", (req, res) => {
    res.status(404).json({error: "not found"}).send();
});


app.listen(PORT, () => {
    console.log("LISTENING ==> " + PORT);
});

