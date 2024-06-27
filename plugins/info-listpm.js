let handler = async (m, { conn: conn, usedPrefix: usedPrefix, text: text, command: command, args: args }) => {
    let pc = Object.entries(await conn.chats).map((([nama, isi]) => ({ nama: nama, ...isi }))).filter((v => !v.nama.endsWith("g.us"))),
        list = pc.map(((chat, index) => `*${index + 1}.* @${chat.id.split("@")[0]}`)).join("\n");
    if (!args[0]) return void m.arinply(`📺 Private List:\n\n${list}`);
    let i = parseInt(args[0]) - 1;
    if (!pc[i]) return m.reply("Invalid index!");
    let pp = await conn.profilePictureUrl(pc[i].id, "image"),
        str = `*Information about ${await conn.getName(pc[i].id)}*\n\n`;
    str += `*Name:* ${pc[i].name || "Unknown"}\n`;
    str += `*ID:* @${pc[i].id.replace("@s.whatsapp.net", "")}\n`;
    str += `*Presences:* ${pc[i].presences || "Unknown"}\n`;
    await conn.sendFile(m.chat, pp, "profile.jpg", str, m, null, { mentions: [pc[i].id] });
};

handler.help = ["listpm"];
handler.tags = ["owner"];
handler.command = ["listpm"];
handler.limit = true
module.exports = handler;