let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} queen elisabeth `)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.nomisec07.site/api/sdf?q=${text}`
  conn.sendFile(m.chat, res, 'sdf.jpg', `Prompt : ${text}`, m, false)
}
handler.command = handler.help = ['sdf'];
handler.tags = ['internet'];
handler.register = true;
handler.limit = true;

module.exports = handler;