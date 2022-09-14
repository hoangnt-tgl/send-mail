const nodemailer = require('nodemailer')
//require('dotenv').config();
const EMAIL_ADDRESS_FROM = process.env.EMAIL_ADDRESS_FROM;
const EMAIL_ADDRESS_TO = process.env.EMAIL_ADDRESS_TO;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

var transporter = nodemailer.createTransport({
	host: 'mail.glowpacific.com',   // hostname
    port: 465, 
    secure: true,   
    auth: {
        user: EMAIL_ADDRESS_FROM,
        pass: EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify((error, success) => {
	if (error) {
		console.log(error)
	}
	else {
		console.log('Ready for message');
	}
})

module.exports.sendMail = function(name, email, subject, body, callback){
    var mailOptions = {
        from: EMAIL_ADDRESS_FROM,
        to: EMAIL_ADDRESS_TO,
        subject: subject,
        html: `<h1>${name}</h1>
            <p>Email: ${email}</p>
            <p>${body}</p>`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            callback(null, false)
        }
        else {
            console.log('Email sent: ' + info.response);
            callback(null, true)
        }
    })
}