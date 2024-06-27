let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let name = conn.getName(m.sender)
    fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `Sisa limit ${user.name}`, 
                            }
                          }
                        }
conn.reply(m.chat, `${global.db.data.users[who].limit} Limit Tersisa ಥ_ಥ`, fdoc)

}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit|ceklimit)$/i
handler.register = true
module.exports = handler