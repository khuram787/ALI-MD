
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA71Wa4+iSBT9K5v6qhkLeZt0MoAgKCqt4muzHwooeT+EQsSJ/32D3T3Tybx6k8nyqSiqbp1z655z+QKyPKzwDLdg9AUUZXhBBHdD0hYYjIBcn064BH3gIYLACOC5cZieKb1h3UnmpKc2hLej4lETpzZZyfGW6bVKqig7QfgE7n1Q1E4Sur8IWFmR6ltBzlGTfKeKieP2YLX3K0qJyc7kd/7m5hmKlRo7+wncu4goLMPMV4sAp7hEyQy3FgrLj8GfG2ZRxhV8DoNniTDibZ7wpUcowl/NpaJaERWlvjNBCnQ/Bl8J4Nze9iYS06LxUuYXp6vjScuhaA2YAObUYcnMqtaQKti8wK9CP8Oe4eGMhKT9cN7TybHutXF6jdhwMTlk2mqfM7Fkm47Sk1Qo+nk+a66eQG3jjwHn1HJx1ipmYu4iS9mJZcQ7Xlzz0Dmr1pQ56+EkT5zBIr6q74Fb5VutxP8l7+e5HYm20XjmWdkfFqy9EfCWSsY03YznxymjVLxYH/aTIvlg3q9WHazqWOHrQ2+8oZd5szK5821grHApc0M9io5JHFfaFubf4CNSl79CGSynLopts93blJKvrNJM24mhYUupt6tbrIzLnoR0yItZ7h9bteC0eHPQi00xWcLiIHGX5/DYOpwQLdleFA+vdLY7Kf7Tg1GMW8MDI+reByX2w4qUiIR59pjjhT5A3mWN3RKTR3pBpAdyPnUyLJLQmAzk5XRwmKfLZCiONzAPtxJ7mPrusB6M4yfQB0WZu7iqsKeHFcnLdo6rCvm4AqO/HzfVkS5xmhM8DT0wAuKQhiJLUxRDUZ+rT02ASIWK4lOGCeiDU5mncwxGpKxxHzw2aKymKKLG0TQtDCVak0SOZwRWHcusQtE001FMXw7dhCmuCEqLjhnL8qIoitS9/2dwQEhrjCqylMRBmpd4SmU1VWE5TpJEjaXE/wsHL/ACRfGyrMkUJykKJSu0JAoayzGqAuXxz3EIEEKK/1M4xqzEC0OZGw41acxwvERrIifznCRLIq9o3G9wCPd/+iDDV/Ki664aaaoPTmFZETuriyRH3pvo3z4i183rjKzbzFW6AS7B6N00JiTM/KpjVmeodIPwgpWOBxidUFLhrwLAJfbeuLyaupJ7nS533HC8nW9moMPeBfouN6Ph99nJULcYzIK6ROlf6zohKAN9kDw2UyLDsCILRZ6D1BCOhp+7+ftX2N0pHiYoTKrO1eemEijz58Jdetfnw0FaS9JMkjqlvdF8s5MXuUInuOqNKTdsz3eL03z3vG9zTJUzVQ9vg9BKr2hl+UWSqf6PgoARWNm2I7PDxrpMJ01kOqmvr4dHYZLVjkMHK29DjANjDEK8CLIzItZsNT/Noxbulr5s24YZa54fH0XXDNjebbuAGrw0cvPUnebhS+ji94d5ohMdpwL0/bWuZvBiq/au2S5tz6Zvwj5TaycYH/V1PTuWbH2ehWhqMnV+YR3vaB6LlUJMUW/2In0dLBC1w5fB4WyMmxejexht8trgwlcLCh+vpxA/+sXrTf3uQl9wd2UH7/13IV4b0E9MXPYmjLsSlMZdnnJ9tr9psSacdYLaQGaqAROx1S7eMLPj8WqAe1f/RYLIKS/T7m8kdRDogzKvuyI2slP+q94vGYb8/MI6QRWRvgnjB94j8C+rrDIvdFQFXVHOmEBnuipvpaJYE0TedAakx3MZgPu/jnKQRaIJAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
