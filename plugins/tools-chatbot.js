const fetch = require('node-fetch');

// Menyimpan riwayat pesan sebelumnya
let previousMessages = [];

async function before(m) {
  if (m.isBaileys && m.fromMe) return;
  let chat = global.db.data.chats[m.chat];
  if (
    m.text.startsWith(".") ||
    m.text.startsWith("#") ||
    m.text.startsWith("!") ||
    m.text.startsWith("/") ||
    m.text.startsWith("\\/")
  )
    return;
  if (chat.chatbot && !chat.isBanned && m.text) {
    try {
    await conn.sendPresenceUpdate(`composing`, m.chat)

      /*let ka = await fetch(`https://api.azz.biz.id/api/alicia?q=${m.text}&user=nezuko&key=nez1945`)
    let nez = await ka.json()
      let hasil = `${nez.respon}`;
      m.reply(hasil)*/
      
      let ka = await fetch(`https://itzpire.site/ai/botika?q=${m.text}&user=${m.sender}&model=aliicia`)
    let nez = await ka.json()
      let hasil = `${nez.result}`;
      m.reply(hasil)
      // ini buat nyimpen riwayat chat sebelumnya, tapi cuma support api azz aja keknya
      previousMessages = messages;
    } catch (e) {
      throw "Maaf, aku tidak mengerti";
    }
  }
  return;
}
module.exports = { before };