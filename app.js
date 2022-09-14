var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());


var port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

var sendmail = require('./routes/send-mail');


app.use('/send-mail', sendmail);
module.exports = app;