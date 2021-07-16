const express = require("express");
const connect = require('./board')

const app = express();
connect();

const port = 8000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const dbAdress = "mongodb+srv://hyunmin:qlalfqjs5!@cluster0.u2ith.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(dbAdress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


app.get("/", (req , res) =>
    res.send("Hello world!"));
app.listen(port, () => console.log('listening on port 8000'));

module.exports = connect;