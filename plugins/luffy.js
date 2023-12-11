let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Gunakan dengan cara ${usedPrefix}${command} Kemii`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://xzn.wtf/api/onepiece?text=${text}&apikey=kemii`
  conn.sendFile(m.chat, res, 'pubg.jpg', `Nih kak`, m, false)
}
handler.help = ['luffy'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(luffy)$/i
handler.register = true
handler.limit = true

module.exports = handler

