let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Successfully banned chat!')
  // } else m.reply('There is a host number here...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|bnc$/i
handler.owner = true

module.exports = handler