let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Example: .badgirl kemii'
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = `https://api.lolhuman.xyz/api/badgirl?apikey=${global.lolkey}&name=${text}`
  conn.sendFile(m.chat, res, 'badgirl.jpg', `Succesfull!!`, m, false)
}
handler.help = ['badgirl'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^badgirl$/i
handler.limit = false

module.exports = handler