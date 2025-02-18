const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// LinkedIn Strategy
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/linkedin/callback",
    scope: ['r_liteprofile', 'r_emailaddress'],
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Instagram Strategy
passport.use(new InstagramStrategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/instagram/callback"
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Twitter Strategy
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CLIENT_ID,
    consumerSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/twitter/callback"
}, (token, tokenSecret, profile, done) => {
    return done(null, profile);
}));

module.exports = passport;
