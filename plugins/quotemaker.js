let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw `Example: ${usedPrefix}${command} Mungkin pekerjaanku yang paling diakui, tapi aku takkan bisa membuatnya sendirian.`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/quotemaker?apikey=${global.lolkey}&text=${response[0]}`
  conn.sendFile(m.chat, res, 'quotesmaker.jpg', `Done`, m, false)
}
handler.help = ['quotemaker'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(quotemaker)$/i
handler.register = true
handler.limit = true

module.exports = handler
