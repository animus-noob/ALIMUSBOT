let handler = async m => {

let caption = `*BANTU SUBSCRIBE YA BIAR SEMANGAT*
Link: https://youtube.com/@sknproject

Powered by _*@6281335334848*_`
conn.reply(m.chat, caption, fakes, {
        contextInfo: {
    forwardingScore: 12,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363284677800230@newsletter',
      serverMessageId: null,
      newsletterName: namebot3,
    },
        mentionedJid: [`6281335334848@s.whatsapp.net`],
        externalAdReply: {
          title: `C R E A T O R - S C R I P T`,
          body: ``,
          thumbnailUrl: `https://btch.pages.dev/file/4dd29ef4630b53ce5eeb1.jpg`,
          sourceUrl: ``,
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
handler.command = /^(ytskn)$/i

module.exports = handler