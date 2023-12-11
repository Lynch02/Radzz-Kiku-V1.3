let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Input Text!\n\nExample: ${usedPrefix + command} appel`
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	let url = await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`)
	conn.sendFile(m.chat, url, 'dalle.jpg', wm, m)
}
handler.command = /^(aidraw)$/i
handler.tags = ['fun', 'internet', 'tools']
handler.help = ['aidraw']
handler.limit = true
handler.premium = false
module.exports = handler