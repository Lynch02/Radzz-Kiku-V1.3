let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  
  if (!text) return conn.reply(m.chat, `• *GET NUMBER*\n\n• ${usedPrefix}addvip number|days\n*Example:* ${usedPrefix}vip 6283137550315|99\n\n• ${usedPrefix}addvip @tag|days\n*Example:* ${usedPrefix}addvip @6283137550315|99`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  var jumlahHari = 86400000 * hl[1]
  var now = new Date() * 1
  global.db.data.users[hl[0]].vip = true
  if (now < global.db.data.users[hl[0]].vipDate) global.db.data.users[hl[0]].vipDate += jumlahHari
  else global.db.data.users[hl[0]].vipDate = now + jumlahHari
  conn.reply(m.chat,`• *UPGRADE VIP*\n\nBerhasil menambahkan akses vip kepada *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Vip : ${msToDate(global.db.data.users[hl[0]].vipDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  conn.reply(hl[0],`• *UPGRADE VIP*\n\nBerhasil menambahkan akses vip kepada *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Vip : ${msToDate(global.db.data.users[hl[0]].vipDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } }) 

}
handler.help = ['addvip <@tag|days>']
handler.tags = ['owner']
handler.command = /^(addvip)$/i
handler.owner = true
handler.mods = false
handler.fail = null
module.exports = handler

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+":"+hours+":"+ minutes + "";
}