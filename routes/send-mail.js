var express = require('express');
var router = express.Router();
var sendMail = require('../models/send-mail');

router.post('/', function(req, res, next) {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var body = req.body.body
    sendMail.sendMail(name, email, subject, body, function(err, status){
        if (err) res.json(500, err)
        else res.json(status)
    })
});
module.exports = router