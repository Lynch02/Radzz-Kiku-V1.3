let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
m.reply(`${global.db.data.users[who].coin} Coin Tersisa`)

}
handler.help = ['coin [@user]']
handler.tags = ['xp']
handler.command = /^(coin)$/i
module.exports = handler