let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw `Example: ${usedPrefix}${command} Kemii|Sazumi|Chan`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/gsuggest?apikey=${global.lolkey}&text1=${response[0]}&text2=${response[1]}&text3=${response[2]}`
  conn.sendFile(m.chat, res, 'sugest.jpg', `Done`, m, false)
}
handler.help = ['goglesugest'].map(v => v + ' <text>|<text>|<text>')
handler.tags = ['maker']
handler.command = /^(goglesugest|gsugest|sugest)$/i
handler.register = true
handler.limit = true

module.exports = handler

