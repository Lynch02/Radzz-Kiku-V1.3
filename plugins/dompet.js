let handler = async (m, { conn, args }) => {
  let target = m.mentionedJid[0] || m.sender 
  let user = global.db.data.users[target]
  let name = user.name

  let exp = user.exp
  let limit = user.limit
  let balance = user.money
  let atm = user.bank
  let level = user.level
  let role = user.role

  let caption = `*DOMPET USER*

◦  *Role:* ${role}
◦  *Limit:* ${limit}
◦  *Balance:* ${balance}
◦  *Bank:* ${atm}`
  conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'M y - B a l l a n c e',
thumbnailUrl: 'https://telegra.ph/file/5488aa5c5b3c28cd35e0e.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })

  //conn.sendFile(m.chat, 'https://telegra.ph/file/5488aa5c5b3c28cd35e0e.jpg', 'balance.jpg', caption, m)
}

handler.help = ['balance', '.balance @tag']
handler.tags = ['info']
handler.command = /^bal(ance)?|dompet|bank$/i

module.exports = handler