let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw `Example: ${usedPrefix}${command} Kemii|Sazumi`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.zahwazein.xyz/creator/ytcomment?url=https://telegra.ph/file/85a0ee44cd54240139116.jpg&text=${response[0]}&text2=${response[1]}&apikey=${global.zein}`
  conn.sendFile(m.chat, res, 'ytcomment.jpg', `Done`, m, false)
}
handler.help = ['ytcomment'].map(v => v + ' <text>|<text>')
handler.tags = ['maker']
handler.command = /^(ytcomment)$/i
handler.register = true
handler.limit = true

module.exports = handler

