let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} Kemii`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'joker.jpg', `Nih kak`, m, false)
}
handler.help = ['joker'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(joker)$/i
handler.register = true
handler.limit = true

module.exports = handler

