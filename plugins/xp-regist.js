const nodemailer = require('nodemailer');
const config = require('../config.json');

let handler = async function(m, { text, command, usedPrefix }) {
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*ᴋᴀᴍᴜ ꜱᴜᴅᴀʜ ᴛᴇʀᴅᴀꜰᴛᴀʀ!*\n*ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴅᴀꜰᴛᴀʀ ᴜʟᴀɴɢ*\n\nᴋᴇᴛɪᴋ .setage ᴜɴᴛᴜᴋ ᴍᴇɴɢᴜʙᴀʜ ᴜᴍᴜʀᴍᴜ\nᴋᴇᴛɪᴋ .setname ᴜɴᴛᴜᴋ ᴍᴇɴɢᴜʙᴀʜ ɴᴀᴍᴀᴍᴜ`
  let email = text.trim().split(/\s+\|\s+/).shift();
  let message = text.trim().split(/\s+\|\s+/).pop();
  if (!isValidEmail(email)) return conn.sendMessage(m.chat, { image: { url: `https://aemt.me/file/oDdPeeSOROom.jpg`, }, caption: 'TUTORIAL!! ( ZOOM BIAR KELIATAN )!', viewOnce: true, footer: wm }, { quoted: m });
  let codeh = ['736390','882910','882010','715611','002819','562622','432282','322929','662522','443321','937100','762837','028393','625529','727638','992719','092739','727269','629461','239210']
  let getRandom = codeh[Math.floor(Math.random() * codeh.length)]
  let name = m.name
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email,
      pass: config.password
    }
  });
  let mailOptions = {
    from: config.email,
    to: email,
    subject: config.email_subject,
    html: `
    <!DOCTYPE html>
<html>
<body>

<h1 style="font-family:verdana;">Hai ${name}</h1>
<p style="font-family:courier;">Thanks For Verification with email</p>

      <div style="border: 1px solid #ccc; padding: 20px; font-family: courier;">
        <p style="font-size: 14px; margin-bottom: 20px;">Silahkan ketik \n\n.vercode ${getRandom}\n\nAtau bisa juga klik button dibawah untuk verifikasi</p>
        </div>
      </div>
      <table width="100%" cellspacing="0" cellpadding="0">
  <tr>
      <td>
          <table cellspacing="0" cellpadding="0">
              <tr>
                  <td style="border-radius: 2px;" bgcolor="#ED2939">
                      <a href="https://wa.me/${nomorbot}?text=.vercode+${getRandom}" target="_blank" style="padding: 8px 10px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
                          Click             
                      </a>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
</table>
<p style="font-size: 12px; display: inline-block;">Copyright © Nan Sakkarin</p>
       


</body>
</html>
`
  };
  try {
    await transporter.sendMail(mailOptions);
    m.reply('Code telah terkirim\nSilahkan cek Gmail anda!!');
  } catch (e) {
    console.log(e);
    m.reply('Gagal mengirim email. Silakan coba lagi nanti');
  }
};

handler.help = ['regist'];
handler.tags = ['main'];
handler.owner = false
handler.command = /^(regist)$/i;

module.exports = handler;

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}