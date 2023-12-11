let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'Example: .ttlogo Kemii|Sazumi'
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=a03b95861cfa18e990228d7b&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'joker.jpg', `Nih kak`, m, false)
}
handler.help = ['ttlogo'].map(v => v + ' <text>|<text>')
handler.tags = ['maker']
handler.command = /^(ttlogo)$/i
handler.register = true
handler.limit = true

module.exports = handler

