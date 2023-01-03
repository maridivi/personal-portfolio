require("dotenv").config();
let nodemailer = require("nodemailer");

const accountKey = process.env.DUMMY_ACCOUNT_KEY;

export default function contact(req, res) {
  try {
    if (req.method === "POST") {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "mary89dev@gmail.com",
          pass: accountKey,
        },
        secure: true,
      });
      const mailData = {
        from: "mary89dev@gmail.com",
        to: "maridivi89@gmail.com",
        subject: `Message From ${req.body.userName}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:${req.body.email}</p>`,
      };
      transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
      });
      console.log(req.body);
      res.status(200).send("");
    }
  } catch (err) {
    res.status(500).send(err.message || "Can't send email");
  }
}
