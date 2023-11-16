const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const nodemailer = require("nodemailer");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const accountsRouter = require("./accounts/accounts.router");
const shoppingRouter = require("./shopping/shopping.router");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tinazhang616@gmail.com", // Your Gmail email address
    pass: "kofs bjpm hpux kxeb", // Your Gmail password or app-specific password
  },
});

app.post("/contact-us", upload.single("file"), async (req, res) => {
  try {
    // Handle file upload here
    const { name, email, subject, message } = req.body;
    const file = req.file;

    console.log("Form data:", { name, email, subject, message });
    console.log("File data:", file);

    // Send email
    const mailOptions = {
      from: { email }, // Sender email address
      to: "tinazhang616@gmail.com", // Your email address where you want to receive the form data
      subject: `Virtual Staging: ${subject}`,
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    // Process the data and send a response
    res.json({ success: true });
  } catch (error) {
    console.error("Error handling form submission:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.use("/shopping", shoppingRouter);
app.use("/accounts", accountsRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
