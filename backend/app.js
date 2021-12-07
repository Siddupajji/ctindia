require('dotenv').config()
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(cors({credentials: true, origin: true}));

app.post("/sendmail", (req, res) => {
  let userdata = req.body;

  console.log(userdata);
  ////////-------------------------------------------------------------------------------------------------
  
  const auth = {
    auth: {
      apiKey: process.env.API_KEY,
      domain: process.env.DOMAIN_KEY
    },
  };
  const transporter = nodemailer.createTransport(mailgun(auth));

  let mailOptions = {
    from: userdata.email,
    to: "bantasingh122@gmail.com",
    subject: `Message from ${userdata.email}`,
    html: `<p>This is ${userdata.fname}</p><br>
    <h4>My contact number is ${userdata.fnumber}</h4><br>
    <h3>${userdata.message}</h3>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent" + info.response);
    }
  });
});
app.listen(8080, () => {
  console.log("Connected to port 8080...");
});
