
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61U246jRhD9l37FWnO/SSMtYGwwg+829kR5wNBA21za0ICZ1fzHvuUj8mP5hAh7JjvSbnYnUnhqiubUOVWn6gvIC1RBB3ZA/QJwiRqfwP5IOgyBCvQ6imAJBiD0iQ9UIM/c8cwUj7vhaaTNwlhcusR+xqLIznLm6ZoqllNflDG5puYDeBkAXB9TFPwEUGjPJ4pbYCtoY1wn5xon3KXB+4Y9o6l7Wef8yMLn04Hb2w/gpUf0UYny2MQJzGDppw7sFj4qP0afmrAsbe8vSpGJY2oVTTSdETw6n8IqyTpuxXtWfXCXuDGDj9HPEL9YtXPY+G4A8bHG/PO+k735FK7tzUHxlNkuCoLFgjLbO/0KxTkM7RDmBJHuw3VvH4/HmOQQGueFDQ/n+ZmpDtoTJXt0F8vHhXulmnBuFPvdB4mvnbRampNVsjpdg4LBp8Yq4QUFmlM3i8pCumG5mkNJu5P8nviifPPK+b/UfW17m9oVzVRfUvudTM1bMZdO9mxDU8ZkligHNl0GCRQo5vAx+t14OAysLXcRRtYa6Ta9esyuYraoxJTdXLnpFoebMXK1lVV9o++TuvwZy6sXK5HnzzcSQ4+Gvu3Z3LBgL448Ybl0fkGa4szL5/PTlh+zWtXGKXrm2mhiOs2UCjrhPKdOXUKCuB2zwTb35pp8olH7cFN0hp0dApV5GYASxqgipU9QkfcxlmEGwA+bNQxKSG7lBWWoFd24fc5SxtmMZtNHrusiCoqpL15hqsnIluxEumwJOjyAAcBlEcCqgqGFKlKUnQuryo9hBdTfbp3qRZcwKwicohCoQGE5VlJ4WRJl5XP1qU18UvkYf8ohAQMQlUXmQqCSsoYDcPthRHMiL0uCOTI4zuB4jhNZhjMlWpQEQ9aZXmJ2T7pBGayIn2GgMpIgMDwt0tLL4P/hIdA6L7AiLfGGYiqyICu8yRmmztAsLwgM+0sevw9ADq/k7uO++hwzABEqK7LNa5wWfvhm8rePfhAUdU7WXR4Y/QGWQH0XhoSgPK56ZXXul0GCGmj0OoAa+WkF/2k4LGH4puV1iRlF2PuQ4VhP5CYr0HPvgb6rjcp9X530dosVFJbnZVZRFIXjRZX73McHIPd7KPDXH1//7GvyyrYHDyHxUVoBFRiPmwVpYsOc1yclWE4mmhtrRqyBb+repubuSrl0dtpSlISjaIgFHk3tHfVE6Ks2Ni55Md8e3FHhwSl94M4PPwABKkhELmXrw1bYjS6XHLsLL6egIj3ax3NXTq3rYd80LN8hKs86BZ0YdqJ7rq4zYVwoxZLRgwOZFYKdme4kedxi9lptno34oc8WwgYF8H0ytz2vlq2VJvt9Llbjwrbcp242HO/2z+5p7GMJ06XV7kOhc7AZTWb2kN9menN0rRMkTrssdpmwb/a7FZ/oj662Pc7YxUm7z/Ntn6Svexy9Thq6vUYI3tbiawt+1cc7795t9MvgHcTrnv2XXaVHTpcuzXlNeVRcX5xltx5H2TF0l/rygsVROhlp4jhH4WQmgJfe9jj1SVSUGVCBn4dlcbNJWdS9fe08Kn6SzNBt23gVnvoV0b6NxI+mjL/fWpQFtvwqASrgVsoTp/T+7jSM18QnbxMGtP4ZzSjw8jd1UtaHjAgAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
