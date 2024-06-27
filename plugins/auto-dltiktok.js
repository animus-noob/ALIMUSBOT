const fetch = require('node-fetch');

let handler = m => m
handler.before = async function before(m) {
    const regex = /^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/;
    let spas = "                "
    if (regex.test(m.text)) {
    m.reply(wait)
    try {
                const url = `${m.text}`
		const apis = await fetch(API('lann', '/api/download/tiktok', { url: url, apikey: lann }));
		if (!apis.ok) throw await apis.text()
var jsons = await apis.json()
if (!jsons.status) throw jsons
var { 
video, 
title,
title_audio,
audio
} = jsons.result
await conn.sendFile(m.chat, video, 'tiktok.mp4', `▢ *Title:* ${title}\n▢ *Deskripsi:* ${title_audio}`, m)
conn.sendFile(m.chat, `${audio[1]}`, 'tikmp3.opus', null, m)
    } catch (e) {
return conn.reply(m.chat, `ada yanh error`, m);
    }
}
return !0;
}

handler.exp = 0

module.exports = handler