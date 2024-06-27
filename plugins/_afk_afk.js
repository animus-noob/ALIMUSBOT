let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
let tag = `@${m.sender.split`@`[0]}`
let mentionedJid = [m.sender]

  conn.reply(m.chat, `${tag} sekarang AFK ${text ? '\nDengan Alasan : ' + text : 'Tanpa Alasan'}`, m, { contextInfo: { mentionedJid }})
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
//@${who.split`@`[0]}        /////@${m.sender.split`@`[0]