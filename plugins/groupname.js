let handler = async (m, { conn, participants, groupMetadata }) => {
m.reply(`${groupMetadata.subject}`)
}
handler.help = ['ceknamegc']
handler.tags = ['group']
handler.command = /^(cekname(group|gc))$/i

module.exports = handler