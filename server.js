

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, '')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/text.html"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port is open on 127.0.0.1:${portNumber}`);
