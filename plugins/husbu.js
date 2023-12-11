let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/husbu?apikey=${global.lolkey}`, 'Kikuchanj.jpg', '2023 © 𝓡𝓪𝓭𝔃𝔃 - MD', m)
}
handler.help = ['husbu']
handler.tags = ['anime']

handler.command = /^(husbu)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler