require("dotenv").config();

const express = require('express')
const cors = require("cors");
const passport = require("passport");
const session = require("express-session")
const db = require('./config/db.connect')
const authRoutes = require("./routes/authRoutes")
const User = require("./models/user.model")

const app = express()
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json()); // Parse JSON request bodies
// Configure session middleware
app.use(
  session({
    secret: 'SECRET-KEY', // Replace with a strong secret key
    resave: false, // Avoid saving the session if it hasn’t been modified
    saveUninitialized: false, // Avoid saving uninitialized sessions
    cookie: {
      secure: false, // Set to true in production with HTTPS
      maxAge: 1000 * 60 * 60, // 1 hour (milliseconds)
    },
  })
);

app.use(passport.initialize()); // Initialize passport for authentication
app.use(
  cors({
    origin: "*", // Allow requests from frontend
    methods: "GET,POST,PUT,DELETE", // Specify allowed HTTP methods
    credentials: true, // Allow credentials (like cookies) if needed
  })
);


// Passport strategy
require("./config/passport"); // Ensure the passport strategies are initialized

app.use("/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})