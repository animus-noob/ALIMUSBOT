var { WAMessageStubType } = require('@adiwajshing/baileys');

async function before(m) {
  if (!m.messageStubType || !m.isGroup) return;

  const edtr = `*@${m.sender.split('@')[0]}*`;
  const messages = {
    21: `mengubah Subject Grup menjadi:\n*${m.messageStubParameters[0]}*`,
    33: `telah mengganti nomornya`,
    22: `telah mengubah icon grup`,
    1: `*mereset* link grup!`,
    23: `*mereset* link grup!`,
    132: `*mereset* link grup!`,
    24: `mengubah deskripsi grup.\n\n${m.messageStubParameters[0]}`,
    25: `telah mengatur agar *${m.messageStubParameters[0] == 'on' ? 'hanya admin' : 'semua peserta'}* yang dapat mengedit info grup.`,
    26: `telah *${m.messageStubParameters[0] == 'on' ? 'menutup' : 'membuka'}* grup!\nSekarang ${m.messageStubParameters[0] == 'on' ? 'hanya admin yang' : 'semua peserta'} dapat mengirim pesan.`,
    29: `telah menjadikan @${m.messageStubParameters[0].split('@')[0]} sebagai admin.`,
    30: `telah memberhentikan @${m.messageStubParameters[0].split('@')[0]} dari admin.`,
    72: `mengubah durasi pesan sementara menjadi *@${m.messageStubParameters[0]}*`,
    123: `*menonaktifkan* pesan sementara.`,
    45: `memulai panggilan video/audio di grup`,
    46: `memulai panggilan video/audio di grup`,
    71: `mau bergabung ke grup ini`,
    74: `mengirim media sekali tampil`,
    141: `bergabung melalui tautan`,
    142: `membuat grup komunitas`,
    143: `menghapus grup komunitas`,
    156: `melakukan polling di grup`,
  };

  const messageType = messages[m.messageStubType];
  if (messageType) {
    await this.sendMessage(m.chat, {
      text: `${edtr} ${messageType}`,
      mentions: m.messageStubParameters[0] !== undefined ? [m.sender, m.messageStubParameters[0]] : [m.sender]
    }, { quoted: fkontak });
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType]
    });
  }
}

const disabled = false;

module.exports = { before, disabled };