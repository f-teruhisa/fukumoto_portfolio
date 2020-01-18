const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

// Configure of email server
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// Template for email
const adminContents = data => {
  return `ポートフォリオサイトからお問い合わせを受けました。
お名前：
${data.name}
メールアドレス：
${data.email}
内容：
${data.content}
`;
};

exports.sendMail = functions.https.onCall((data, context) => {
  // email settings
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "お問い合わせ",
    text: adminContents(data)
  };

  // Seinding for Administraiter
  mailTransport.sendMail(adminMail, (err, info) => {
    if (err) {
      return console.error(`send failed. ${err}`);
    }
    return console.log("send success.");
  });
});
