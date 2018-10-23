var express = require('express');
var router = express.Router();
require('dotenv').config()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = (data) => {
  let newData = JSON.parse(data);
  let subj = newData.subject
  let email = newData.email
  return{
  to: 'mustea.adrian95@gmail.com',
  from: 'webag@webag.com',
  subject: `${email} is interested in ${subj}`,
  text: data
  }
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/send/contact/:body', function(req,res,next) {
  sgMail.send(msg(req.params.body))
  // sgMail.send(msg(req.params.body.name))
  res.send('')
  res.status(200)
})

module.exports = router;
