let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} 1girl, solo, ponytail, blush.`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/text2img/realistic?prompt=${text}`
  conn.sendFile(m.chat, res, 'realistic.jpg', `Prompt : ${text}`, m, false)
}
handler.command = handler.help = ['realistic'];
handler.tags = ['internet','diffusion'];
handler.register = true;
handler.premium = true;
handler.limit = true;

module.exports = handler;