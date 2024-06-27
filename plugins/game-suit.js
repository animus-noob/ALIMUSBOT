let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${usedPrefix}suit gunting\n\nkasih spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nBot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 15
            m.reply(`Kamu menang! +15 money\nKamu: ${text}\nBot: ${astro}`)
        } else {
            global.db.data.users[m.sender].money -= 10
            m.reply(`Kamu kalah! -10 Money\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 15
            m.reply(`Kamu menang! +15 Money\nKamu: ${text}\nBot: ${astro}`)
        } else {
            global.db.data.users[m.sender].money -= 10
            m.reply(`Kamu kalah! -10 Money\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 15
            m.reply(`Kamu menang! +15 Money\nKamu: ${text}\nBot: ${astro}`)
        } else {
            global.db.data.users[m.sender].money -= 10
            m.reply(`Kamu kalah! -10 Money\nkamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.group = true

module.exports = handler
