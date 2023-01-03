require("dotenv").config();
let nodemailer = require("nodemailer");

export default async function contact(req, res) {
  const { userName, email, message } = req.body;
  try {
    if (req.method === "POST") {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "mary89dev@gmail.com",
          pass: process.env.GMAIL_PW,
        },
        secure: true,
      });

      await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            console.log("Server is ready to take our messages");
            resolve(success);
          }
        });
      });

      const mailData = {
        from: "mary89dev@gmail.com",
        replyTo: email,
        to: "maridivi89@gmail.com",
        subject: `Message From ${userName}`,
        text: message + " | Sent from: " + email,
        html: `<div>${message}</div><p>Sent from:${email}</p>`,
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function (err, info) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });

      console.log(req.body);
      res.status(200).send("");
    }
  } catch (err) {
    res.status(500).send(err.message || "Can't send email");
  }
}
