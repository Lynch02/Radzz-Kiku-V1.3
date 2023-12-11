let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *AFK* 
You atre now afk until u send a message 
▢ *User:* ${conn.getName(m.sender)} 
▢ *Alasan:* ${text ? text : ''}
  `)
}
handler.help = ['afk <reason>']
handler.tags = ['group']
handler.command = /^afk$/i
handler.group = true

module.exports = handler
