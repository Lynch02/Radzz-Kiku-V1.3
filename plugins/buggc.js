let handler  = async (m, { conn }) => {
var main = {
 "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
},
  "message": {
  "groupInviteMessage": {
"groupJid": "120363023427805441@g.us",
"inviteCode": "z0JcSBd3mAhIfSSY",
"inviteExpiration": `Mii Elisabeth`,
"groupName": `Mii Elisabet`,
"caption": `${namebot}`
 }
   }
}

await conn.reply(m.chat, `${namebot}`, main)
}
handler.help = ['buggc']
handler.tags = ['tools']
handler.command = /^buggc$/i

handler.owner = true

module.exports = handler