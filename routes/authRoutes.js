const express = require('express');
const passport = require('passport');
const router = express.Router();

// LinkedIn Authentication
router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', 
    passport.authenticate('linkedin', { failureRedirect: '/' }),
    (req, res) => {
        res.json({ message: 'LinkedIn Login Successful', user: req.user });
    }
);

// Instagram Authentication
router.get('/instagram', passport.authenticate('instagram'));

router.get('/instagram/callback', 
    passport.authenticate('instagram', { failureRedirect: '/' }),
    (req, res) => {
        res.json({ message: 'Instagram Login Successful', user: req.user });
    }
);

// Twitter Authentication
router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', 
    passport.authenticate('twitter', { failureRedirect: '/' }),
    (req, res) => {
        res.json({ message: 'Twitter Login Successful', user: req.user });
    }
);

module.exports = router;
