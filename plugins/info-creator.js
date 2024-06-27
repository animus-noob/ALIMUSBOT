var name = global.nameowner
var numberowner = global.numberowner
var gmail = global.mail
const { 
default: 
makeWASocket,
BufferJSON,
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
downloadContentFromMessage, 
downloadHistory, 
proto,
getMessage, 
generateWAMessageContent, 
prepareWAMessageMedia 
} = require("@adiwajshing/baileys");
var handler = async (m, {
conn
}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: ${name}
item.ORG: Creator Bot
item1.TEL;waid=${numberowner}:${numberowner}@s.whatsapp.net
item1.X-ABLabel:Nomor Creator Bot 
item2.EMAIL;type=INTERNET:${gmail}
item2.X-ABLabel:Email Owner
item3.ADR:;;🇮🇩 Indonesia;;;;
item3.X-ABADR:ac
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'CN', 
            contacts: [{ vcard }]
       },
       contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `Owner/Pemilik ${global.namebot}`,
                    body: `ᴄʟɪᴄᴋ, ᴛᴏ ᴄᴏɴᴛᴀᴄᴛꜱ ᴄʀᴇᴀᴛᴏʀ ꜱᴄʀɪᴘᴛ`,
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: 'https://telegra.ph/file/0fa0a78bd0ef7b49d080f.jpg',
                    sourceUrl: `https://wa.me/6281335334848`,
                }
            }
   }, { quoted: m})
//await conn.reply(m.chat, "Itu Adalah nomor owner Bot", sentMsg)
}
handler.command = handler.help = ['owner', 'creator', 'own'];
handler.tags = ['info'];
handler.limit = false;
module.exports = handler;