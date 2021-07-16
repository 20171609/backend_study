const express = require("express");
const boardRouter = require('./routes/board');

const app = express();

const port = 8000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const dbAdress = "mongodb+srv://hyunmin:qlalfqjs5!@cluster0.u2ith.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


app.get("/", (req , res) =>
    res.send("Hello world!"));

app.use(express.json());
app.get("/board", boardRouter);
app.post("/board", boardRouter);

app.listen(port, () => console.log("listening on port " + port));

mongoose.connect(dbAdress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));