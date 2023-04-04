import nodemailer from 'nodemailer'
import './env_config.js'

const MAIL_ADRESS = process.env.MAIL_ADRESS
const MAIL_PASS = process.env.MAIL_PASS
const MAIL_PORT = process.env.MAIL_PORT
const MAIL_SERVER = process.env.MAIL_SERVER
const MAIL_ADRESS_RECEIVER = process.env.MAIL_ADRESS_RECEIVER

// async..await is not allowed in global scope, must use a wrapper
async function mailSender(content) {
  
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: MAIL_SERVER,
    port: MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: MAIL_ADRESS, // generated ethereal user
      pass: MAIL_PASS, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `cinema system <${MAIL_ADRESS}>`, // sender address
    to: `${MAIL_ADRESS_RECEIVER}`, // list of receivers
    subject: "Hello ✔ test 2", // Subject line
    text: `${content}`, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}





export default mailSender