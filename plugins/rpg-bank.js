let fs = require('fs')
let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(m.sender)
    let thumbnail = fs.readFileSync('./media/bank.jpg')
    let user = global.db.data.users[who]
    fnez = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `BANK 🏦`,
                            }
                          }
                        }
    
let anu = `
- Name: *${user.name}*
- Tag: *@${m.sender.split('@')[0]}*

⭐ Role : *${user.role}*\n
*${user.money}* Money 💵
*${user.exp}* Exp ✨
*${user.limit}* Limit 📊`
conn.reply(m.chat, anu, fnez, {
        contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
     	showAdAttribution: true,
          title: `HERE, FILL IN YOUR BANK`,
          thumbnailUrl: `https://telegra.ph/file/aa897c8d0f24dece4af61.jpg`,
          sourceUrl: web,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
       
}
handler.help = ['bank', 'dompet', 'dompet @user']
handler.tags = ['xp']
handler.command = /^(my|dompet|bank|money)$/i

module.exports = handler