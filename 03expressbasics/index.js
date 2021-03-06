const express = require('express');
const app = express();

app.get('/', function (req, res) {
    // res.status(200).json({message: "Hello World"});
    res.status(500).json({
        message: "Error"
    });
});

app.get('/about', function (req, res) {
    res.send("<h1>I am Adhikansh Mittal</h1>");
});

app.get('/contact', function (req, res) {
    res.send("<ul><li>8077510286</li><li>adhikanshmittal@gmail.com</li><li>440 Q block</li></ul>")
});

app.post('/login', function (req, res) {
    res.send("login success");
});

app.delete('/acc-dele', function (req, res) {
    res.send("Delete Successfully");
});

app.get('/random.text', function (req, res) {
    res.send('random.text')
});

app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
});

app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
});

app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
});

app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
});

app.get('/user/:id/stats/:status_id', function (req, res) {
    res.send(req.params);
});

app.get('/flights/:from-:to', function (req, res) {
    res.send(req.params);
});

port = process.env.PORT || 3000;
app.listen(port, function (req, res) {
    console.log(`Server is running on the port ${port}....`);
});