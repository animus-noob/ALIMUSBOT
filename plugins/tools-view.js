const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
await conn.sendMessage(m.chat, {
text: `Biar hemat memory 🗿\n\n*Link:* ${link}`,
contextInfo: { forwardingScore: 9999, isForwarded: true,
externalAdReply: {  
title: 'Media Preview',
body: '',
thumbnailUrl: link,
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['liat (Reply Medianya)', 'lihat (Reply Medinya)', 'Preview (Reply Medinya)']
handler.tags = ['tools']
handler.command = /^(liat|lihat|view)$/i

module.exports = handler