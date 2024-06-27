const fs = require('fs')
let handler = async (m, { conn }) => {
  let files = fs.readdirSync('./media')
  if (!files.length) {
    conn.reply(m.chat, 'Tidak ada audio/voice note yang tersimpan', m)
    return
  }
  let vnList = files.filter(file => file.endsWith('.opus')).map(file => `◦ ${file.replace('.opus', '')}`).join('\n')
  let caption = 'List Audio/Voice Note:\n\n' + vnList
  conn.reply(m.chat, caption, m)
}
handler.help = ['listvn']
handler.tags = ['tools']

handler.command = /^listvn$/i

module.exports = handler