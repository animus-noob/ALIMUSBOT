let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0] || isNaN(args[0])) {
		throw '*Contoh*: .buylimit 10';
	}

	conn.chatRead(m.chat)
	let count = parseInt(args[0]);
	let price = count * 15;
	let users = global.db.data.users;
	let user = users[m.sender];
	if (price > user.money) {
		throw `ᴍᴀᴀꜰ, ᴍᴏɴᴇʏ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴄᴜᴋᴜᴘ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ${count} ʟɪᴍɪᴛ.
ʜᴀʀɢᴀ 1 ʟɪᴍɪᴛ ᴀᴅᴀʟᴀʜ 15 ᴍᴏɴᴇʏ.

ꜱɪʟᴀʜᴋᴀɴ ʙᴇʟɪ/ᴛᴏᴘᴜᴘ ᴍᴏɴᴇʏ

• ʜᴀʀɢᴀ:
▢ 5.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 5.000
▢ 30.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 10.000
▢ 60.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 15.000
▢ 100.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 20.000
ʜᴜʙᴜɴɢɪ wa.me/${numberowner}`;
	}
	user.money -= price;
	user.limit += count;
	conn.reply(m.chat, `ʙᴇʀʜᴀꜱɪʟ ᴍᴇᴍʙᴇʟɪ ${count} ʟɪᴍɪᴛ ᴅᴇɴɢᴀɴ ʜᴀʀɢᴀ ${price} ᴍᴏɴᴇʏ.`, m);
}

handler.help = ['buylimit <jumlah>'];
handler.tags = ['xp'];
handler.command = /^buylimit$/i;
handler.register = true;
handler.limit = false;

module.exports = handler;