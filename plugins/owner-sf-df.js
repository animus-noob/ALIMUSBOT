let fs = require('fs');

let handler = async (m, { text, usedPrefix, command }) => {

  if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`;

  if (command === 'f') {

    if (!m.quoted.text) throw `balas pesan nya!`;

    let path = `plugins/${text}.js`;

    await fs.writeFileSync(path, m.quoted.text);

    m.reply(`tersimpan di ${path}`);

  } else if (command === 'd') {

    let path = `plugins/${text}.js`;

    if (!fs.existsSync(path)) throw `file plugin ${text}.js tidak ditemukan`;

    fs.unlinkSync(path);

    m.reply(`file plugin ${text}.js berhasil dihapus`);

  }

};

handler.command = /^(f|d)$/i;

handler.rowner = true;

module.exports = handler;
