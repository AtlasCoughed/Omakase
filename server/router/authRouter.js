var router = require('express').Router();
var controller = require('../controller/auth.controller.js');

router.get('/login', controller.auth.getLogin);

app.post('/login', controller.auth.postLogin);

app.get('/signup', controller.auth.getSignUp)

app.post('/signup', controller.auth.postSignUp);

app.get('/vote', controller.auth.isLoggedIn, controller.auth.getVote);

app.get('/auth/facebook', controller.auth.getFacebook);

app.get('/auth/facebook/callback',controller.auth.getFacebookCallback);

app.get('/logout', controller.auth.getLogout);

module.exports = router;

