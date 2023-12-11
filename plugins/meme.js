let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${global.lolkey}`, 'meme.jpg', 'Random Meme', m)
}
handler.help = ['meme']
handler.tags = ['tools']

handler.command = /^(meme)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler