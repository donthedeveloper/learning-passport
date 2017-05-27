const express = require('express');
const app = express();
const chalk = require('chalk');
require('dontenv').config();

const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const TWITCH_SECRET = process.env.TWITCH_SECRET;
const SESSION_SECRET = process.env.SESSION_SECRET;
const CALLBACK_URL = 'http://localhost:3000/auth/twitch/callback';

app.use(session({secret: SESSION_SECRET, resave: false, saveUnitialized: false}));
app.use(morgan('dev'));
app.use(express.static('browser/public'));
app.use(passport.initialize());
app.use(passport.session());

const router = require('./server/routes');

app.listen(process.env.PORT || 3001, function() {
    console.log(chalk.blue(`App is listening on port ${this.address().port}`));
});