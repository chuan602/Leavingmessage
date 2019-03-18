const express = require("express");
const router = require("./router.js");
const bodyParser = require("body-parser");
const path = require('path');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './build')));

app.set('views', path.join(__dirname, './build'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(router);

app.listen("80", function() {
    console.log("server is running...");
});
