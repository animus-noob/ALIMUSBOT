let handler = async (m, { conn, text }) => {
  let premiumList = [
    {
      duration: "1 HARI",
      price: 1000,
      command: "1H",
    },
    {
      duration: "3 HARI",
      price: 1000,
      command: "3H",
    },
    {
      duration: "7 HARI",
      price: 1000,
      command: "7H",
    },
    {
      duration: "30 HARI",
      price: 1000,
      command: "30H",
    },
  ];

  if (!text) {
    let listText = `*LIST PREMIUM:*

1. PREMIUM 1 HARI
▢  HARGA : *1,000* Money
▢  *Command :* .buyprem 1H

2. PREMIUM 3 HARI
▢  HARGA : *3,000* Money
▢  *Command :* .buyprem 3H

3. PREMIUM 7 HARI
▢  HARGA : *7,000* Money
▢  *Command :* .buyprem 7H

4. PREMIUM 30 HARI
▢  HARGA : *30,000* Money
▢  *Command :* .buyprem 30H`

    conn.reply(m.chat, listText, fakes, {
      contextInfo: {
        externalAdReply: {
          title: "Hai kak,\nSilakan pilih paket premium Anda.",
          body: "",
          thumbnailUrl: `https://telegra.ph//file/f37f562fa5bd5b16459b4.jpg`,
          sourceUrl: instagram,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

    return;
  }

  let days = parseInt(text);
  if (isNaN(days)) return conn.reply(m.chat, "Invalid input. Masukkan jumlah hari yang ingin Anda beli.", m);

  let selectedPremium = premiumList.find((premium) => premium.command.toLowerCase() === text.toLowerCase());
  if (!selectedPremium) return conn.reply(m.chat, "Prem tidak ditemukan.", m);

  let user = global.db.data.users[m.sender];
  if (!user) return conn.reply(m.chat, "Anda tidak terdaftar.", m);

  let money = user.money || 0;
  let price = selectedPremium.price * days;
  if (money < price) return conn.reply(m.chat, `ᴍᴏɴᴇʏ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴍᴇɴᴄᴜᴋᴜᴘɪ
  ꜱɪʟᴀʜᴋᴀɴ ʙᴇʟɪ/ᴛᴏᴘᴜᴘ ᴍᴏɴᴇʏ

• ʜᴀʀɢᴀ:
▢ 5.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 5.000
▢ 30.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 10.000
▢ 60.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 15.000
▢ 100.000 ᴍᴏɴᴇʏ, ʜᴀʀɢᴀ: ʀᴘ 20.000
ʜᴜʙᴜɴɢɪ wa.me/${numberowner}`, m);

  user.premium = true;
  user.premiumDate = Date.now() + days * 24 * 60 * 60 * 1000;
  user.limit += days;
    
  
  user.money -= price;

  conn.reply(m.chat, `ᴀɴᴅᴀ ᴛᴇʟᴀʜ ʙᴇʀʜᴀꜱɪʟ ᴍᴇᴍʙᴇʟɪ *${selectedPremium.duration}* ᴘʀᴇᴍɪᴜᴍ.\nꜱᴇᴛᴇʟᴀʜ ᴍᴇᴍʙᴇʟɪ ᴊᴀɴɢᴀɴ ᴍᴇᴍʙᴇʟɪ ʟᴀɢɪ, ᴋᴀʀᴇɴᴀ ᴀᴋᴀɴ ᴍᴇᴍʙᴜᴀᴛ ᴘʀᴇᴍ ꜱᴇʙᴇʟᴜᴍɴʏᴀ ʜᴀɴɢᴜꜱ`, m);
};

handler.command = /^buyprem$/i;
handler.help = ["buyprem"];
handler.tags = ["main"];
handler.register = true;

module.exports = handler;