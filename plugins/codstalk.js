let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Input ID!\n\nExample: ${usedPrefix + command} 6290150021186841472`
	let kemii = await fetch(`https://api.lolhuman.xyz/api/codm/${text}?apikey=${global.lolkey}`)
	let hasil = await kemii.json()
	m.reply(`${hasil.result}`)
   console.log(hasil)
}
handler.help = ['codstalk']
handler.tags = ['internet', 'tools']
handler.command = /^(codstalk)$/i
handler.limit = true

module.exports = handler