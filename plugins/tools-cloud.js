let handler = async (m, { conn, text, command }) => {
	Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
  let greeting = '';
    const greetingText = Styles(greeting, 1);
    
    let baba = `${text}`
    conn.reply(m.chat, Styles(baba, 1), m)
        }
handler.help = ['cloud']
handler.tags = ['tools']
handler.command = /^cloud$/i

handler.owner = false

module.exports = handler