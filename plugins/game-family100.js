var { family100} = require('@bochilteam/scraper');
const winScore = 25
async function handler(m) {
let imgr = `${global.thumb}`

    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
    const json = await family100()
    let caption = `
*Soal:* ${json.soal}
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
+${winScore} Money tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendFile(m.chat, imgr + 'Family100', null, caption, m),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i
handler.group = true
handler.limit = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}