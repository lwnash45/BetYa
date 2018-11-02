const path = require('path');
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.render('../index');
// });

server.listen(3000, () => {
    console.log(`Server is up on port ${port}!!`);
});