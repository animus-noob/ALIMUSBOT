module.exports = {
    async all(m) {
        if (!m.isGroup) return 
        let chats = global.db.data.chats[m.chat]
        if (!chats.expired) return !0
        if (+new Date() > chats.expired) {
        	const data = global.owner.filter(([id, isCreator]) => id && isCreator)
            await m.reply(`Waktunya *${this.user.name}* Untuk Keluar,\nkarena hanya tiral 1 hari\nJika ingin tetap disini, Hubungi\nhttps://wa.me/${global.numberowner}`)
            await this.delay(100) 
            await this.groupLeave(m.chat)
        }
    }
}