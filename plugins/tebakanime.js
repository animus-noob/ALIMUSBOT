let fetch = require('node-fetch')
let timeout = 120000
let poin = 25
let xp = 500
let handler = async (m, { conn, usedPrefix }) => {

    conn.tebakjudulanim = conn.tebakjudulanim ? conn.tebakjudulanim : {}
    let id = m.chat
    if (id in conn.tebakjudulanim) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakjudulanim[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/nyenyenye.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = 
    `*「 Tebak Judul Anime 」*
    
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tahint* untuk bantuan
Money: ${poin} Money
Bonus: ${xp} XP
`.trim()
    conn.tebakjudulanim[id] = [
        await conn.sendFile(m.chat, json.img,  'ages.jpg', caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakjudulanim[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakjudulanim[id][0])
            delete conn.tebakjudulanim[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.register = true
handler.limit = true
handler.group = true

module.exports = handler