let fetch = require('node-fetch')

let handler = async (m, { conn,  text, usedPrefix, command }) => {
	if (!text) throw `🚩Enter Title!\nExample: ${usedPrefix + command} spotify`
	await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	let kemii = await fetch(`https://api.zahwazein.xyz/webzone/happymod?query=${text}&apikey=${global.zein}`)
	let res = await kemii.json()
    let hasil = res.result.map((v, i) => `Name: ${v.name}\nLink: ${v.link}\n`).join('\n')
    let v = res.result
	await conn.sendFile(m.chat, res.result[0].icon, 'happy.jpg', `${hasil}`, m)
}
handler.help = ['happymod'].map(v => v + ' <query>')
handler.tags = ['downloader', 'internet']

handler.command = /^(happymod)$/i
handler.premium = false

module.exports = handler