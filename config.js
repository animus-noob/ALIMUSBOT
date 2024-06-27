/* SOURCE ORI BY RTXZY & BETABOT, PENULIS ULANG NAN SAKKARIN
Thanks to: 
- Allah SWT 
- Hyzer
- Erlanrahmat
- BOTCAHX
- Kurukuu-MD
- Nayla Hanifah
- Nan Sakkarin ( Saka )
- Khasan
- NansOffc
- Hokkai 
- H4RDOFFC
- Zykomd
*/
//---------------- ISI SESUAI NO LU AMA BOT ----------------
global.owner = ['6282136853395']  
global.mods = ['6282136853395'] 
global.prems = ['6282136853395']
global.cljoins = ['6282136853395']
global.numberowner = '6282136853395' 
global.nomorbot = '62895329659575'

//---------------- UNTUK FITUR DONASI ----------------
global.dana = '6282136853395'
global.pulsa = '6282136853395'
global.gopay = '6282136853395'

//---------------- GANTI SESUAI NAMA BOT DLL ----------------
global.nameowner = 'Alimus-Bot'
global.namebot = 'Alimus-Bot'
global.namebot2 = 'A L I M U S - B O T'
global.namebot3 = ''
global.mail = 'pokoke.ali@gmail.com' 
global.gc = ''
global.gcjoinpaksa = ''
global.web = ''
global.instagram = ''

//---------------- WATERMARK BOT ----------------
global.wm = 'Alimus'
global.watermark = wm
global.wm2 = '⫹⫺ Alimus-Bot'
global.wm3 = '© Alimus'
global.wm4 = 'Made by Alimus-Bot'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'

//---------------- STIKER WM ----------------
global.packname = 'Made with'
global.author = 'Alimus-Bot\nNomor bot\n+62 821-3685-3395'

global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'

//---------------- IMAGE THUMBNAIL ----------------
global.thumb = pickRandom(['https://btch.pages.dev/file/f1d60c593b94d33a05b03.jpg','https://btch.pages.dev/file/bf620a7cbf2aaec5f3ff7.jpg','https://btch.pages.dev/file/3e9c02e48ff6b827c0d0a.jpg','https://btch.pages.dev/file/2089345936cf1c05bdb3f.jpg','https://btch.pages.dev/file/7c3c74867a0e209ccdd40.jpg','https://btch.pages.dev/file/e8890a8836af8598a02b0.jpg'])
//--------------- NAMA CHARACTER AI/CAI ----------------
global.cai = 'Arine'


//===> APIKEY 
global.apikeyJ = 'sk-proj-eKDlyBePPGlU5KiSjIA5T3BlbkFJYavlKrbzXTFaH7lWyrDd'
global.lann = '667d0075bf7f7d9ad312'
global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': '667d0075bf7f7d9ad312'
}

// ---------------- GAUSAH DI UBAH ----------------

global.htki = "───『"
global.htka = "』───"
global.htjava = pickRandom(["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"])
global.pmenus = '┊' 

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
