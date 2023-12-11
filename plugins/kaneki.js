let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, 'https://api.betabotz.org/api/anime/keneki?apikey=Kemii', 'kaneki.jpg', 'Kaneki', m)
}
handler.help = ['kaneki']
handler.tags = ['anime']

handler.command = /^(kaneki)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler