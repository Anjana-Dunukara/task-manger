const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "anjanach@ieee.org",
    subject: "Thanks for joining in with Task App!!",
    text: `Welcome to the app, ${name}. Let me know how you het along with the app.`,
  });
};

const sendGoodByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "anjanach@ieee.org",
    subject: `Good Bye ${name}, we are sorry to see you leave!!`,
    text: `${name} thanks for using Task App, we are sorry to see you leave. give us a feedback about your user expireance with the Task App.`,
  });
};

module.exports = { sendWelcomeEmail, sendGoodByeEmail };
