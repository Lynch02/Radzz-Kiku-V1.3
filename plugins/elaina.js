let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/elaina?apikey=${global.lolkey}`, 'elaina.jpg', wm, m)
}
handler.help = ['elaina']
handler.tags = ['maker']

handler.command = /^(elaina|elaine)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler