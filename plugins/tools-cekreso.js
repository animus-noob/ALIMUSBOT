const jimp = require('jimp');
const uploadImage = require('../lib/uploadImage.js');
const uploadFile = require('../lib/uploadFile.js');

let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw('Di mana media-nya?');

  let media = await q.download();
  let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  let link = await (isMedia ? uploadImage : uploadFile)(media);
  let source = await jimp.read(await link);
  let height = await source.getHeight();
  let width = await source.getWidth();

  await m.reply('Tunggu sebentar...');
  m.reply(`*_💠 RESOLUSI:_* ${width} x ${height}
  *> Lebar :* ${width}
  *> Tinggi :* ${height}
  *> Tautan :* ${link}`);
}

handler.help = ['cekresolution *<foto>*', 'cekreso *<foto>*'];
handler.tags = ['tools'];
handler.command = /^(cekreso(lution)?)$/i;

module.exports = handler;