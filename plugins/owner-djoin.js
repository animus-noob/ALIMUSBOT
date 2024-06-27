let handler = async (m, { conn, text, args, usedPrefix, command }) => { 
if (!text) throw `Fitur ini untuk mengatasi user yang udah join ke komunitas/grup, namun belum bisa pakai bot
*Contoh:* ${usedPrefix}djoin nomornya\n${usedPrefix}djoin ${global.numberowner}`

 global.db.data.users[`${text}@s.whatsapp.net`].joinpaksa = true
m.reply(`Berhasil!`)     
}
handler.command = /^(djoin)$/i
handler.tags = ['owner']; 
handler.help = ['djoin'];
handler.owner = true
handler.private = false

module.exports = handler
