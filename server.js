const express = require('express');
const app = express();
const fs = require('fs');
const { google } = require('googleapis');

const PORT = process.env.Port  || 3000;
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const TOKEN_PATH = 'token.json';
const CREDENTIALS_PATH = 'credentials.json'

//serve static files from the 'public' directory
app.use(express.static('public'));

//Load client secrets from a local file.
fs.readFileSync(CREDENTIALS_PATH, (err, content) => {if (err) return console.error('Error loading client secret file:', err);
//Authorize a clients with credentials, then call the Gmail API.
authorize(JSON.parse(content), getEmail);
});

