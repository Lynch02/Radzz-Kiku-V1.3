let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Upgrade to Premium first!
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Upgrade to Premium', 'status@broadcast')
}
handler.help = ['bokepfree']
handler.tags = ['asupan']
handler.command = /^(bokepfree)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler