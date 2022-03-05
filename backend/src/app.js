const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 80;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api/user");

app.all("*", (req, res) => {
    res.status(404).json({error: "not found"}).send();
});


app.listen(PORT);