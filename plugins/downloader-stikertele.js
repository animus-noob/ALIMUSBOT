var { Telesticker } = require ('xfarr-api')
var { stickerTelegram } = require ('@bochilteam/scraper')

let handler = async (m, { conn, args }) => {
	if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let res = await Telesticker(args[0])
		await m.reply(`Mengirim ${res.length} stickers...`)
		if (m.isGroup && res.length > 30) {
			await m.reply('Jumlah stiker lebih dari 30, bot akan mengirimkannya dalam private chat.')
			for (let i = 0; i < res.length; i++) {
				await conn.sendMessage(m.sender, { sticker: { url: res[i].url }})
				await delay(1500)
			}
		} else {
			for (let i = 0; i < res.length; i++) {
				await conn.sendMessage(m.chat, { sticker: { url: res[i].url }})
				await delay(1500)
			}
		}
	} else if (args && args.join(' ')) {
		let [query, page] = args.join(' ').split('|')
		let res = await stickerTelegram(query, page)
		if (!res.length) throw `Query "${args.join(' ')}" not found`
		m.reply(res.map(v => `*${v.title}*\n_${v.link}_`).join('\n\n'))
	} else throw 'Input Query / Telesticker Url'
}
handler.help = ['telesticker']
handler.tags = ['downloader']
handler.command = /^(telestic?ker|stic?kertele)$/i
handler.premium = true 

module.exports = handler 
const delay = time => new Promise(res => setTimeout(res, time))