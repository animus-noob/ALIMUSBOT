
let { createHash } = require('crypto')
let fetch = require('node-fetch')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = global.db.data.users[m.sender]
    if (user.registered === true) throw `*ᴋᴀᴍᴜ ꜱᴜᴅᴀʜ ᴛᴇʀᴅᴀꜰᴛᴀʀ!*\n*ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴅᴀꜰᴛᴀʀ ᴜʟᴀɴɢ*\n\nᴋᴇᴛɪᴋ .setage ᴜɴᴛᴜᴋ ᴍᴇɴɢᴜʙᴀʜ ᴜᴍᴜʀᴍᴜ\nᴋᴇᴛɪᴋ .setname ᴜɴᴛᴜᴋ ᴍᴇɴɢᴜʙᴀʜ ɴᴀᴍᴀᴍᴜ`
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan otp anda..!!`, m)
    if (args[0] == '882910' || args[0] == '443321' || args[0] == '662522' || args[0] == '322929' || args[0] == '562622' || args[0] == '432282' || args[0] == '002819' || args[0] == '715611' || args[0] == '882910' || args[0] == '882010' || args[0] == '937100' || args[0] == '736390' || args[0] == '762837' || args[0] == '028393' || args[0] == '625529' || args[0] == '727638' || args[0] == '992719' || args[0] == '092739' || args[0] == '727269' || args[0] == '629461' || args[0] == '239210') {

   if (new Date - global.db.data.users[m.sender].lastcode > 86800000) {
     if (new Date - global.db.data.users[m.sender].lastcode < 86800000) throw `Anda sudah mengambill code gift, Code gift anda sudah kadaluarsa..\nTunggu besok iya kak..`
   let name = m.name
  let age = pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])
  user.name = name.trim()
  user.age = age
  user.limit += 50
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let thumb = 'https://telegra.ph/file/b5cc36920ff446bd25de7.jpg'
  let cap = `
┏─• *ᴜsᴇʀs*
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *ʙᴏɴᴜꜱ:* 50 ʟɪᴍɪᴛ
│▸ *sɴ:* ${sn}
┗────···

ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ ꜱᴜᴅᴀʜ ʀᴇɢɪꜱᴛᴇʀ,
ᴋᴇᴛɪᴋ .setage ᴜɴᴛᴜᴋ ᴍᴇɴɢᴜʙᴀʜ ᴜᴍᴜʀᴍᴜ
ᴋᴇᴛɪᴋ .setname ᴜɴᴛᴜᴋ ᴍᴇɴɢᴜʙᴀʜ ɴᴀᴍᴀᴍᴜ`
   let buttonMessage= {
'document':{'url':gc},
'mimetype':global.doc,
fileName:global.namebot2,
'fileLength':'9999999999999',
'pageCount':'',
'contextInfo':{
'externalAdReply':{
'showAdAttribution':true,
'mediaType':1,
'previewType':'pdf',
'title':'V E R I F I C A T I O N',
'body':'',
'thumbnailUrl':'https://telegra.ph/file/4a7e5f18efaadec18a7a0.jpg',
'sourceUrl':web,
'renderLargerThumbnail':true}},
'caption':cap,
}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
} else conn.reply(m.chat, 'Kode anda sudah kadaluarsa, harap register kembali..', m)
   } else {
        conn.reply(m.chat, `*「 OTP TIDAK VALID 」*`, m)
    }
}
handler.help = ['vercode']
handler.tags = ['main']
handler.command = /^(vercode)$/i
handler.limit = false
handler.private = false

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}