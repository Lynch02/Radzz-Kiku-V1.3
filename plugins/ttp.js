let handler = async (m, { conn, text }) => {
if (!text) throw 'Example: .ttp Hello'
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/ttp?apikey=${global.lolkey}&text=${text}`
  conn.sendFile(m.chat, res, 'dann.webp', '', m, false, { asSticker: true })
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^(ttp)$/i
handler.limit = true
handler.premium = false

module.exports = handler