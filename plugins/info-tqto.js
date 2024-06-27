

let handler = async (m, { conn }) => {
	  let saka = `*T H A N K S - T O*
- Allah SWT 
- @0
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
- And all creator bot in the world
- All of you who have used this script.
- People Who Donate
─────────────────────
`
  await conn.reply(m.chat, saka, m, {
    contextInfo: {
      mentionedJid: ['0@s.whatsapp.net','6285706283014@s.whatsapp.net']
    }
  })
}

handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler