let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'chatbot':
      if (!isROwner) {
        global.dfail('rowner', m, conn)
          throw false
        }
      chat.chatbot = isEnable
      break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'gcjp':
    case 'gcjoinpaksa':
      if (!isROwner) {
        global.dfail('rowner', m, conn)
          throw false
        }
      chat.arinejoin = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break 
    case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
    case 'toxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = !isEnable
      break
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    case 'restrict':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['restrict'] = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
    case 'joinpaksa':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    case 'viewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
ʟɪꜱᴛ ᴏᴘᴛɪᴏɴ:
| ᴡᴇʟᴄᴏᴍᴇ
| ᴅᴇʟᴇᴛᴇ
| ᴘᴜʙʟɪᴄ
| ᴀɴᴛɪʟɪɴᴋ
| ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
| ᴀɴᴛɪꜱᴛɪᴄᴋᴇʀ
| ᴀᴜᴛᴏꜱᴛɪᴄᴋᴇʀ
| ᴀᴜᴛᴏʟᴇᴠᴇʟᴜᴘ
| ᴊᴏɪɴᴘᴀᴋꜱᴀ
| ɢᴄᴊᴏɪɴᴘᴀᴋꜱᴀ
| ᴅᴇᴛᴇᴄᴛ
| ᴅᴏᴄᴜᴍᴇɴᴛ
| ᴡʜɪᴛᴇʟɪꜱᴛᴍʏᴄᴏɴᴛᴀᴄᴛꜱ
| ʀᴇꜱᴛʀɪᴄᴛ
| ɴʏɪᴍᴀᴋ
| ᴀᴜᴛᴏʀᴇᴀᴅ
| ᴘᴄᴏɴʟʏ
| ꜱᴡᴏɴʟʏ
ᴄᴏɴᴛᴏʜ:
${usedPrefix}ᴇɴᴀʙʟᴇ ᴡᴇʟᴄᴏᴍᴇ
${usedPrefix}ᴅɪꜱᴀʙʟᴇ ᴡᴇʟᴄᴏᴍᴇ
`.trim())
      throw false
  }
  fnez = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${m.text}`,
                            }
                          }
                        }
  let anjay = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=${type}`
 // let mamang = `*Berhasil di ${isEnable ? 'nyala' : 'mati'}kan oleh @${m.sender.split('@')[0]}*\n*${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}*`.trim()
    let mamang = `*${htjava}${htki} OPTIONS ${htka}${htjava}*
🗂️ *ᴛʏᴘᴇ:* ${type} 
📊 *ꜱᴛᴀᴛᴜꜱ:* ꜱᴜᴄᴄᴇꜱ ✅
🎚️ *ᴏᴘᴛɪᴏɴꜱ:* ${isEnable ? 'ᴇɴᴀʙʟᴇ' : 'ᴅɪꜱᴀʙʟᴇ'}
📣 *ꜰᴏʀ:* ${isAll ? 'ᴛʜɪꜱ ʙᴏᴛ' : isUser ? '' : 'ᴛʜɪꜱ ᴄʜᴀᴛꜱ'}
`.trim()
// Pengiriman
conn.sendMessage(m.chat, {
text: mamang,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: `B O T - S E T T I N G S`,
thumbnailUrl: anjay,
sourceUrl: ``,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fnez})
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler