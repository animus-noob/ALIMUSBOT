let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let time = global.db.data.users[m.sender].setage + 60000000
  if (new Date - global.db.data.users[m.sender].setage < 60000000) throw `Tunggu selama ${msToTime(time - new Date())}\nKalau kamu mau ubah umur lagi`
 
if (!text) throw `*Contoh:* ${usedPrefix}setage umurmu\n${usedPrefix}setage 17`

let user = global.db.data.users[m.sender]
user.age = `${text}`
m.reply(`Sukses mengganti umur anda menjadi ${text}`)
global.db.data.users[m.sender].setage = new Date * 1
        
}
handler.command = /^(setage)$/i
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