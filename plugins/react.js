let handler = async(m, { conn, text, usedPrefix, command }) => {
  if(!text) throw `Masukkan Emote!\n\n*Contoh*: ${usedPrefix + command} 🗿`
  if(!m.quoted) throw `Balas Pesannya!`
  conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: text}}, { messageId: m.id })
}
handler.help = ['reaction <reply>']
handler.tags = ['fun']
handler.command = /^rea(c?t?i?o?n?)?$/i
handler.limit = true

module.exports = handler
