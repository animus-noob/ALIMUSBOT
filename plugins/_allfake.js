let fs = require('fs')
let fetch = require('node-fetch')
const moment = require('moment-timezone')

let handler = m => m
handler.all = async function (m) {
	let pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        global.bg = await (await fetch(thumb)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.fetch = require('node-fetch')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'Nothing', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'Nothing', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		global.wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")

//Image
        let waifu = JSON.parse(fs.readFileSync('./media/waifu.json'))
        global.img = pickRandom(waifu)
        
		// pesan sementara
		global.ephemeral = '' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/33e36217b2cae04ae483f.jpg')
        let { data } = await conn.getFile(await(await require('node-fetch')(pp)).buffer())
        
        global.arn = pickRandom([`Smile increases your face value.`, `Think!, do you live in film or reality?`, `Kind words cost nothing.`,`You cannot see love with eyes.`, `Look in the mirror and see your competitor.`, `Be yourself, there's no one better.`,`Life is better when you're laughing`, `Self love is the best love.`, `All the beautiful things are around you.`])
        
		global.adReply = {
			contextInfo: {
    forwardingScore: 12,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363284677800230@newsletter',
      serverMessageId: null,
      newsletterName: namebot3,
    },
				/*externalAdReply: { 
					showAdAttribution: true,
					title: namebot2,
					body: ``,
					thumbnail: data,
					sourceUrl: `https://${global.arn}`,
				}*/
			}
		}
		
		// Fake 🤥
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: '9999999999999999999999999999999999999999999999999999999', status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': m.name, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./media/thumbnail.jpg'), thumbnail: require('fs').readFileSync('./media/thumbnail.jpg'),sendEphemeral: true}}}
		global.fpayment = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": wm,
						"amount1000": 99999,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Kak " + m.name
							}
						},
						"expiryTimestamp": 999999,
						"amount": {
							"value": 999,
							"offset": 9999,
							"currencyCode": wm
						}
					}
				}
			}
		global.ftoko = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2024, status: 1, thumbnail: await conn.resize(data,300,300), surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fsaka = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2024, status: 1, thumbnail: await conn.resize(data,300,300), surface: 1, message: 'A K S E S - D I T O L A K', orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
        global.fsaka2 = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2024, status: 1, thumbnail: await conn.resize(data,300,300), surface: 1, message: 'P R E M I U M - O N L Y', orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
     
       global.flocation = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Japan`s',
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                          }
                        }
                      }
                      global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "999999999999",
                        "ptt": "true"
                               }
                             } 
                            }
             global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"Made By: " + global.nameowner ,"h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
           global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": namebot,"h": wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }

		
		global.fakes = pickRandom([global.ftroli, global.fkontak, global.fpayment, global.ftoko, global.flocation, global.fvn, global.fliveLoc, global.fliveLoc2])
	}
}

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
		}
		
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}