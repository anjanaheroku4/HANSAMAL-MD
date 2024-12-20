const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'HANSAMAL-MD=3ZlWGT4B#alWZPL2MZ3v6YqPM7v6iXehCqitHtVc2EepD8Fwk2r4',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'PZmqhkK2CvAwAd1xwj31QUw16uxkQ91SFoXg' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'anjanaheroku4' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94773962796' : process.env.OWNER_NUMBER
};
