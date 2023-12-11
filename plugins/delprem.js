let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  
  if (!text) return conn.reply(m.chat, `*Example:* ${usedPrefix}unprem @12024988527`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].premium = false
  global.db.data.users[text].premiumDate = 0
  conn.reply(m.chat,`*Successfully removed premium access for @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
handler.help = ['unprem']
handler.tags = ['owner']
handler.command = /^(unprem)$/i
handler.mods = true
handler.fail = null
module.exports = handler