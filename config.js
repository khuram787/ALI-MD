
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MALI-MD~H4sIAAAAAAAAA+1VyY7jNhD9lYBXG2Pti4EGhtTq3W4vcneQAy1RlqzVFGXLHvjfA7m7Jx3MZKYDDHKKThRFVb33qvjqC8iLuCIjcgH9L6Ck8Qkz0i7ZpSSgD1AdhoSCLggww6APLJSIk8Jm0uxgTTljdyH7TifEzshmrnDaXo8bXpHlwbLIrQdw64Ky3qWx/4OA8mpyseLisYPiaaOlUJmelH08S8PU40Whc3RO5vOxPCXLRnsAtzYijmmc760yIhmhOB2RyxzH9GPwzwM436wW7DBbc4wj/qSYTIdF9Oxay95JXaIEh0lvenDz9eBj8PczHfEOpuaYwtnKK2F0cA6zAdQ5znnUm1zYaUNzMuIWmf8Cv4r3OQkGAclZzC4f1t03oe4dz1rS23p0wkuZG7PqilDgO4+dpbKKNObm7jo0rfXHgBtblg5H5QodRqtSODxBeekNghlfQgXNI3d6pUOh1sYeE633wOf0rVeSf6N7x2n2JcZTDS+bo7+v6QpFW0eBuKNgezfpzPLVKZ9gUifJB+G7w4jpauliO6WzVJWQoc0cesVOjaOnkfDs2REeG9Rp3sHHrKY/QkmjZeRsMgQ70Vhg6UF4jjaHXeNnXkADR7dU9WmGd8Kup3jFHMHUJaJHj5VS5t5g5svRdLuyINs4vLHaR8pzCbW5h84Pd0YJuQwC0OdvXUDJPq4YxSwu8nZPlrsAB6cl8Slhd3UB12RItpZybRgZpsjtVdZR8Cnb9LY2PpvTYKEh/dGDhus/gC4oaeGTqiKBG1esoJcJqSq8JxXo/34vVMuZkqxgZBgHoA90QeR0WeR5iec/V5/OEWYVLstPOWGgC0JaZBMC+ozWpAvuP3CSqnOcaskQQQ3yimFBW1QF00QSEhVRbRlmL0lXcUYqhrMS9HlVljWOEyTp1v01OGxoqhxSTMmGtiAbpijxlmFYmols3tQ1+7/C8b8ef8ehCqLKq0YrhoIMSxJVXRMEQbeRpUuWiX6MQ1F/FQ4oKRYv6pKqKEJbHVuybZkX2ySyxBk/0UPRbn90QU4a9mJz7eUU+S4IY1qxdV6XaYGDNw98+4h9v6hztrzkvtEuCAX9d9uEsTjfVy2zOsfUj+ITMVoeoB/itCJf/YBQErxxeZ1xRhG0NsXbi7li81vQYm8DfaNNX/xWnRy3h8EoqinOflvWKcM56IL0/jOvS5Ksy5yuKhwvcH3xc7t/+wq7zRIQhuO0as12MjYiY7IofS9oFk9PMIZwBGHrPG8039z11b52UeOex+gsd/Z+GU68xfZSEJ6OLDe+9uJ51uDH+b5Mc2v/vSBtSi98WtcoCTjjKFuJnRnhddBsGVfkHTQY94apMkjXC3OOjcSazCOBaWKcuXWmH+T4qTLO1fhxRjfL5MhmAhrNHX0wh/ChzRaQU+yT98lGuWvG1+XGsdxrI5HeUEn42cTO6o4uMUyO5+HJ2zuLQ9IIpuWsjZPQW49LNxTrLKbCdLdplo48d8zH6y5HSgYX+jCA+xffv8+d9HXex6+WHN9fw5jcx+drpX5W0Bfcbdtxt+67EK/z+B9mGgocyX/UjLM/Cwt3tL3aia0dXYYvEZKqnnSQKy9ZSaPn52YAbm3/lylmYUEz0AdVtsOgC2hRt008yMPiRyMZDgZo8cI6xRWDf12M73mP8HJqTovSxVXUNuVIilyp7fILLMslw+ztngF4f049cPsTBPMZRbEKAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
