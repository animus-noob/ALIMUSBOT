var fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let cap = `ꜰɪᴛᴜʀ ᴛᴏᴛᴀʟ ʙᴏᴛ ꜱᴀᴀᴛ ɪɴɪ: \n▢ *ᴘʟᴜɢɪɴꜱ :* ±${totalf} ᴘʟᴜɢɪɴꜱ ꜰɪʟᴇꜱ\n▢ *ꜰɪᴛᴜʀ :* ±${fitur.length} ᴍᴇɴᴜ`
conn.reply(m.chat, cap, m)
}  
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler