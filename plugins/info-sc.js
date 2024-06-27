let handler = async m => {

let caption = `*ʜᴀɪ ᴋᴀᴋ, ᴍᴀᴜ ꜱᴄʀɪᴘᴛ ɴʏᴀ?*
ꜱɪʟᴀʜᴋᴀɴ ʟɪʜᴀᴛ ᴅɪ ᴄʜᴀɴɴᴇʟ ꜱᴀʏᴀ,\nᴋʟɪᴋ *ʟɪʜᴀᴛ ꜱᴀʟᴜʀᴀɴ* ᴏʀ *ᴠɪᴇᴡ ᴄʜᴀɴᴇʟ*

ʙᴀꜱᴇ: ʀᴛxᴢʏ-ᴍᴅ ᴀɴᴅ ʙᴇᴛᴀʙᴏᴛ
_ʀᴇᴄᴏᴅᴇ ʙʏ_ _*@6281335334848*_`
conn.reply(m.chat, caption, fakes, {
        contextInfo: {
        mentionedJid: [`6281335334848@s.whatsapp.net`],
        externalAdReply: {
          title: `S O U R C E - C O D E`,
          body: ``,
          thumbnailUrl: thumb,
          sourceUrl: `https://whatsapp.com/channel/0029VafjB0t7dmegQn0Bog2v`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
   /* const arr = [
  "Hehe🗿",
    "*Maaf kak, Script ini masih private*"
]
   
    const { key } = await conn.sendMessage(m.chat, {
    text: 'BUAT SENDIRI KONTOL',
    contextInfo: { forwardingScore: 9999, isForwarded: true,
    mentionedJid: [m.sender], 
    
}}, { quoted: fakes })

for (let i = 0; i < arr.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 3000))
  await conn.sendMessage(m.chat, { text: arr[i], edit: key,  }, { quoted: fakes });
  }*/

}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script|source)$/i

module.exports = handler