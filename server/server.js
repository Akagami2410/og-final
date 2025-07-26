/* eslint-disable no-undef */
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// 🌐 Allow all origins (not recommended for production)
app.use(
  cors({
    origin: "https://og-final-frontend.onrender.com",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());

app.post("/api/send", (req, res) => {
  const { name, email, phone, state, company, role, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required fields.",
    });
  }

  // Immediately respond to the client
  res.status(200).json({ success: true, message: "Submission received!" });

  // Background email send (fire-and-forget)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Og Waters" <no-reply@ogwater.in>`,
    to: "info@ogwater.in",
    subject: "New OG Wtr Collaboration Request",
    html: `
      <h2>New Brand/Collaboration Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>State:</strong> ${state || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Role:</strong> ${role || "N/A"}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  const userMailOptions = {
    from: `"Website Name" <no-reply@ogwater.in>`,
    to: email,
    subject: "✅ We’ve received your form!",
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for reaching out. We've received your submission and will get back to you shortly.</p>
      <hr />
      <p><strong>Your Message:</strong></p>
      <p>${message}</p>
      <br/>
      <p>Warm regards,<br/>Team Lassan</p>
    `,
  };

  // Send emails in the background
  transporter.verify((err, success) => {
    if (err) {
      console.error("Nodemailer config error:", err);
      return;
    }

    transporter.sendMail(mailOptions, (err1) => {
      if (err1) console.error("Admin mail error:", err1);
    });

    transporter.sendMail(userMailOptions, (err2) => {
      if (err2) console.error("User confirmation mail error:", err2);
    });
  });
});

app.get("/", (req, res) => {
  res.send("Server is working!");
});

// 🌍 Start server
const PORT = process.env.PORT || 4400;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
