let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, 'https://api.anna.biz.id/api/nsfw/jahy?&apikey=anna', 'Kemii.jpg', '2023 © Kikuchanj', m)
}
handler.help = ['jahy']
handler.tags = ['nsfw']

handler.command = /^(jahy)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler