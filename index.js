const express = require("express");
const app = express();
const mongoose = require('./mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
const Systems = require('./models/Systems');
const route = require('./routes/systemController');

app.use(cors());
app.use(bodyparser.json());







// Routes
app.use('/api', route);

app.use(express.static(path.join(__dirname, 'public')));



var server = app.listen(8081, () => {
   var port = server.address().port
   console.log("Server is listening on port %s", port);    
})