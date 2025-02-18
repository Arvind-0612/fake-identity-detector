require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('./config/passportSetup'); // OAuth configuration

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Session setup for OAuth authentication
app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
const authRoutes = require('./routes/authRoutes');
const detectionRoutes = require('./routes/detectionRoutes');

app.use('/auth', authRoutes);
app.use('/detect', detectionRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Fake Identity Detector API is running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
