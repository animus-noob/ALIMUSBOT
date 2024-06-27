//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, usedPrefix, command }) => {
try {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'main', 'downloader', 'sticker', 'xp', 'game', 'asupan', 'group', 'fun', 'tools', 'internet', 'info', 'islam', 'kerang', 'maker', 'stalk', 'quotes', 'shortlink', 'anonymous', 'voicechanger', 'image', 'nsfw', 'owner', 'advanced']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
   'main': 'MENU UTAMA',
  'downloader': 'MENU DOWNLOADER',
  'sticker': 'MENU CONVERT',
  'xp': 'MENU EXP',
  'game': 'MENU GAME',
  'group': 'MENU GROUP',
  'fun': 'MENU FUN',
  'tools': 'MENU TOOLS',
  'internet': 'INTERNET',
  'info': 'MENU INFO',
  'islam' : 'MENU ISLAMI',
  'kerang': 'MENU KERANG',
  'asupan': 'MENU ASUPAN',
  'maker': 'MENU MAKER',
  'quotes' : 'MENU QUOTES',
  'stalk': 'MENU STALK',
  'shortlink': 'SHORT LINK',
  'anonymous': 'ANONYMOUS CHAT',
  'voicechanger': 'VOICE CHANGER',
  'image': 'MENU IMAGE',
  'nsfw': 'MENU NSFW',
  'owner': 'MENU OWNER',
  'advanced': 'ADVANCED',
  }
  if (teks == 'main') tags = {
    'main': 'MENU UTAMA',
  }
  if (teks == 'downloader') tags = {
  'downloader': 'MENU DOWNLOADER',
  }
  if (teks == 'sticker') tags = {
  'sticker': 'MENU CONVERT',
  }
  if (teks == 'xp') tags = {
  'xp': 'MENU EXP',
  }
   if (teks == 'asupan') tags = {
  'asupan': 'MENU ASUPAN', 
  }
  if (teks == 'game') tags = {
  'game': 'MENU GAME',
  }
  if (teks == 'group') tags = {
  'group': 'MENU GROUP',
  }
  if (teks == 'fun') tags = {
  'fun': 'MENU FUN',
  }
  if (teks == 'tools') tags = {
  'tools': 'MENU TOOLS',
  }
  if (teks == 'internet') tags = {
  'internet': 'INTERNET',
  }
  if (teks == 'info') tags = {
  'info': 'MENU INFO',
  }
  if (teks == 'islam') tags = {
  'islam': 'MENU ISLAMI',
  }
  if (teks == 'kerang') tags = {
  'kerang': 'MENU KERANG',
  }
  if (teks == 'maker') tags = {
  'maker' : 'MENU MAKER',
  }
  if (teks == 'quotes') tags = {
  'quotes': 'MENU QUOTES',
  }
  if (teks == 'stalk') tags = {
  'stalk': 'MENU STALK',
  }
  if (teks == 'shortlink') tags = {
    'shortlink': 'SHORTLINK',
  }
  if (teks == 'anonymous') tags = {
  'anonymous': 'ANONYMOUS CHAT',
  }
  if (teks == 'voicechanger') tags = {
  'voicechanger': 'VOICE CHANGER',
  }
  if (teks == 'image') tags = {
  'image': 'MENU IMAGE',
  }
  if (teks == 'nsfw') tags = {
  'nsfw' : 'MENU NSFW',
  }
  if (teks == 'owner') tags = {
  'owner': 'MENU OWNER',
  }
  if (teks == 'advanced') tags = {
  'advanced': 'MENU ADVANCED',
  }
  
  
//━━━━━━━━[ UNTUK UBAH FONT ]━━━━━━━━//
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
  
  //━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:``.trimStart(), 
  header: '*「 %category 」*',
  body: '> %cmd %islimit %isPremium',
  footer: '> ────\n', 
  after: `Made With ${global.nameowner}`,
}


//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
     let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let d7 = 'application/PNG'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: `Hai Kak ${m.name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: thumb, //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
let sknurls = pickRandom(['https://btch.pages.dev/file/f1d60c593b94d33a05b03.jpg','https://btch.pages.dev/file/bf620a7cbf2aaec5f3ff7.jpg','https://btch.pages.dev/file/3e9c02e48ff6b827c0d0a.jpg','https://btch.pages.dev/file/2089345936cf1c05bdb3f.jpg','https://btch.pages.dev/file/7c3c74867a0e209ccdd40.jpg','https://btch.pages.dev/file/e8890a8836af8598a02b0.jpg'])

let text = `Hai ${tag} ${global.ucapan}
Saya adalah bot WhatsApp, yang dapat membantu pengguna whatsapp

> ▢ Waktu: ${time}
> ▢ Tanggal: ${week} ${weton}
> ▢ Tanggal: ${date}
> ▢ Islamic date: ${dateIslamic}
> ▢ Uptime: ${uptime}
> ▢ Database: ${rtotalreg} dari ${totalreg}
> ▢ Source: s.id/sknch`
if (teks == '404') {

let nanskn = global.pmenus
const sakkarin_ea = [
                                    {
                                        "title": `${htki} ᴍᴀɪɴ ${htka}`,
                                        "highlight_label": "",
                                        "rows": [
                                            {
                                                "title": `⚡ ${nanskn} 𝚂𝙿𝙴𝙴𝙳 𝙱𝙾𝚃`,
                                                "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙺𝚎𝚌𝚎𝚙𝚊𝚝𝚊𝚗 𝚁𝚎𝚜𝚙𝚘𝚗 𝙱𝙾𝚃",
                                                "id": ".ping"
                                            },
                                            {
                                                "title": `⏰ ${nanskn} 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 𝙱𝙾𝚃`,
                                                "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝚆𝚊𝚔𝚝𝚞 𝙱𝙾𝚃 𝙱𝚎𝚛𝚓𝚊𝚕𝚊𝚗",
                                                "id": ".runtime"
                                            },
                                            {
                                                "title": `💌 ${nanskn} 𝙾𝚆𝙽𝙴𝚁 𝙱𝙾𝚃`,
                                                "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚜𝚒 𝚃𝚎𝚗𝚝𝚊𝚗𝚐 𝙾𝚠𝚗𝚎𝚛",
                                                "id": ".owner"
                                            },
                                            {
                                                "title": `📔 ${pmenus} 𝚂𝙲𝚁𝙸𝙿𝚃 𝙱𝙾𝚃`,
                                                "description": `𝚂𝚘𝚞𝚛𝚌𝚎 𝙲𝚘𝚍𝚎 ${namebot}`,
                                                "id": ".sc"
                                            }
                                            ]
                                            },
                                            {
                                        "title": `${htki} sᴜᴘᴘᴏʀᴛ ${htka}`,
                                        "highlight_label": "😋🗿",
                                        "rows": [
                                            {
                                                "title": `💹 ${pmenus} 𝙳𝙾𝙽𝙰𝚃𝙴`,
                                                "description": `𝚂𝚞𝚙𝚙𝚘𝚛𝚝 𝙾𝚠𝚗𝚎𝚛 𝙰𝚐𝚊𝚛 𝙻𝚎𝚋𝚒𝚑 𝚂𝚎𝚖𝚊𝚗𝚐𝚊𝚝`,
                                                "id": ".donasi"
                                            }
                                            ]
                                         },
                                                                                        {
                                        "title": `${htki} ᴍᴇɴᴜ ${htka}`,
                                        "highlight_label": "Recommended",
                                        "rows": [
                                            {
                                                "title": `💬 ${pmenus} All`,
                                                "description": "Menampilkan Semua command BOT",
                                                "id": ".? all"
                                            },
                                            {
                                                "title": `♻️ ${pmenus} Utama`,
                                                "description": "Menampilkan Menu Utama",
                                                "id": ".? main"
                                            },
                                            {
                                                "title": `📩 ${pmenus} downloaders`,
                                                "description": "Download sesuatu dari BOT",
                                                "id": ".? downloader"
                                            },
                                            {
                                                "title": `🎨 ${pmenus} Stiker`,
                                                "description": "Buat Sticker diBOT",
                                                "id": ".? stiker"
                                            },
                                            {
                                                "title": `✨ ${pmenus} Xp`,
                                                "description": "Informasi tentang datamu",
                                                "id": ".? xp"
                                            },
                                            {
                                                "title": `🎮 ${pmenus} Game`,
                                                "description": "Gamenya seru seru lho (๑˃̵　ᴗ　˂̵)",
                                                "id": ".? game"
                                            },
                                            {
                                                "title": `🏢 ${pmenus} Group`,
                                                "description": "Only Groups",
                                                "id": ".? group"
                                            },
                                            {
                                                "title": `🧩 ${pmenus} Fun`,
                                                "description": "Fitur yang aman untuk keluarga",
                                                "id": ".? fun"
                                            },
                                            {
                                                "title": `🛠️ ${pmenus} Tools`,
                                                "description": "Mungkin tools ini bisa membantu?",
                                                "id": ".? tools"
                                            },
                                            {
                                                "title": `🌎 ${pmenus} Internet`,
                                                "description": "Cari sesuatu diBOT",
                                                "id": ".? internet"
                                            },
                                            {
                                                "title": `😋 ${pmenus} Asupan`,
                                                "description": "Sebaiknya jangan gegabah🗿",
                                                "id": ".? asupan"
                                            },
                                            {
                                                "title": `ℹ️ ${pmenus} Info`,
                                                "description": "Info info BOT",
                                                "id": ".? info"
                                            },
                                            {
                                                "title": `📖 ${pmenus} Islam`,
                                                "description": "Tobat yuk kak",
                                                "id": ".? Islam"
                                            },
                                            {
                                                "title": `🐚 ${pmenus} Kerang`,
                                                "description": "Tanyakan pada ketua club",
                                                "id": ".? kerang"
                                            },
                                            {
                                                "title": `🖨️ ${pmenus} Maker`,
                                                "description": "Boleh dicoba",
                                                "id": ".? maker"
                                            },
                                            {
                                                "title": `📑 ${pmenus} Quotes`,
                                                "description": "Random inspirasi",
                                                "id": ".? quotes"
                                            },
                                            {
                                                "title": `🔦 ${pmenus} Stalk`,
                                                "description": "Hayo, mau kepoin siapa??",
                                                "id": ".? stalk"
                                            },
                                            {
                                                "title": `🔗 ${pmenus} Shortlink`,
                                                "description": "Memperpendek link, umurmu juga bisa",
                                                "id": ".? shortli"
                                            },
                                            {
                                                "title": `🎭 ${pmenus} Anonymous`,
                                                "description": "Bicara dengan orang tidak dikenal",
                                                "id": ".? kerang"
                                            },
                                            {
                                                "title": `🎙️ ${pmenus} Voice Changer`,
                                                "description": "Ubah Audio dengan Filter",
                                                "id": ".? voicechanger"
                                            },
                                            {
                                                "title": `🖼️ ${pmenus} Image`,
                                                "description": "Random photo anime",
                                                "id": ".? image"
                                            },
                                            {
                                                "title": `🔞 ${pmenus} Nsfw`,
                                                "description": "Tch, dasar sagnean",
                                                "id": ".? nsfw"
                                            },
                                            {
                                                "title": `👩‍💻 ${pmenus} Owner`,
                                                "description": "Owner only!",
                                                "id": ".? owner"
                                            },
                                            {
                                                "title": `❓ ${pmenus} Advanced`,
                                                "description": "Hanya owner yang tau",
                                                "id": ".? advanced"
                                            }
                                            ]
                                         },
                                                                                        {
                                        "title": `${htki} A Litle Promotion ${htka}`,
                                        "highlight_label": "Subscribe",
                                        "rows": [
                                            {
                                                "title": "YouTube Sakkarin",
                                                "description": "Menampilkan Chanel YouTube pembuat sc",
                                                "id": ".ytskn"
                                            }
                                        ]
                                    }
                                ]
                                
let media = await prepareWAMessageMedia({ document: (await conn.getFile(thumb)).data, fileName: `‎ `, mimetype: td }, { upload: conn.waUploadToServer })
   let template = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: Styles(text, 1)
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false,
         ...media   
         }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
          {
                            "name": "single_select",
                            "buttonParamsJson": JSON.stringify({
                                "title": "Klik Disini ⎙",
                                "sections": sakkarin_ea,
                            })
                        },
          {
                 "name": "cta_url",
                 "buttonParamsJson": 
 JSON.stringify({
 "display_text": "Channel WhatsApp",
 "url": `https://whatsapp.com/channel/0029VafjB0t7dmegQn0Bog2v`,
 "merchant_url": `https://whatsapp.com/channel/0029VafjB0t7dmegQn0Bog2v`
            })         
            }
          ],
        }),
        contextInfo:{
          mentionedJid: conn.parseMention(text),
          forwardingScore: 9999,
          isForwarded: false,
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: `${week} ${weton}, ${date}`,
            body: `Library: WiskeySockets/Baileys 6.7.4`,
            description: wm,
            mediaType: 1,
            thumbnailUrl: sknurls,
            renderLargerThumbnail: true,
sourceUrl: ``,
          }
        }
      })
    }
  }
}, { userJid: conn.user.jid, quoted: ftoko})
     return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
     }
     
     /*let { proto, generateWAMessageFromContent } = require('@adiwajshing/baileys');

let msgs = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: "test"
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: "test"
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: "test",
                    subtitle: "test",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "single_select",
                            "buttonParamsJson": JSON.stringify({
                                "title": "MENU ALL",
                                "sections": [
                                    {
                                        "title": "title",
                                        "highlight_label": "NEW",
                                        "rows": [
                                            {
                                                "header": "M",
                                                "title": "Menu",
                                                "description": "Membuka seluruh fitur bot",
                                                "id": ".menu"
                                            },
                                            {
                                                "header": "Menu",
                                                "title": "menu all deh",
                                                "description": "menampilkan semua fitur",
                                                "id": ".menu"
                                            }
                                        ]
                                    }
                                ]
                            })
                        }
                    ],
                })
            })
        }
    }
}, { userJid: conn.user.jid, quoted: m });

return await conn.relayMessage(m.key.remoteJid, msgs.message, {
    messageId: m.key.id
});*/
/*return conn.sendMessage(m.chat, {
text: Styles(skntex, 1),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: `L I S T - M E N U`,
body: ``,
thumbnailUrl: `${sknurls}`,
sourceUrl: ``,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fakes})
}*/
/* let buttonMessage= {
'document':{'url':gc},
'mimetype':global.doc,
fileName:'L I S T - M E N U',
'fileLength':'99999999',
'pageCount':'',
'contextInfo':{
'mentionedJid':[m.sender],
'externalAdReply':{
'showAdAttribution':true,
'mediaType':1,
'previewType':'pdf',
'title':namebot3,
'body':'ナン・サッカリン',
'thumbnailUrl':`${sknurls}`,
'sourceUrl':``,
'renderLargerThumbnail':true}},
'caption':Styles(skntex, 1),
}
   return await conn.sendMessage(m.chat,buttonMessage, { quoted:fakes})
    }*/
 
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
     //conn.reply(m.chat, Styles(text.trim(), 1), fakes)
   /* conn.sendMessage(m.chat, {
text: Styles(text.trim(), 1),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: `M A I N - M E N U`,
body: ``,
thumbnailUrl: thumb,
sourceUrl: `https://サッカリン`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fakes})*/
let media = await prepareWAMessageMedia({ document: (await conn.getFile(thumb)).data, fileName: wm, mimetype: td }, { upload: conn.waUploadToServer })
   let template = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: Styles(text.trim(), 1)
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false,
         ...media   
         }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
          {
                 "name": "cta_url",
                 "buttonParamsJson": 
 JSON.stringify({
 "display_text": "Channel WhatsApp",
 "url": `https://whatsapp.com/channel/0029VafjB0t7dmegQn0Bog2v`,
 "merchant_url": `https://whatsapp.com/channel/0029VafjB0t7dmegQn0Bog2v`
            })
          }
          ],
        }),
        contextInfo:{
          mentionedJid: conn.parseMention(text),
          forwardingScore: 9999,
          isForwarded: false,
          externalAdReply: {
            showAdAttribution: true,
            title: `${week} ${weton}, ${date}`,
            body: `Library: WiskeySockets/Baileys 6.7.4`,
            description: wm,
            mediaType: 1,
            thumbnailUrl: sknurls,
            renderLargerThumbnail: true,
sourceUrl: ``,
          }
        }
      })
    }
  }
}, { userJid: conn.user.jid, quoted: m})
     return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.register = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}