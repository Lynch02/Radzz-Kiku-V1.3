let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.betabotz.org/api/anime/kurumi?apikey=${global.btc}`, 'kurumi.jpg', 'Kurumi', m)
}
handler.help = ['kurumi']
handler.tags = ['anime']

handler.command = /^(kurumi)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler