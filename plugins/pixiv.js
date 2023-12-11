var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Enter Title!\n\nExample: ${usedPrefix + command} loli kawai`
  try {
  conn.sendMessage(m.chat, { react: { text: '����', key: m.key }})
  var dann = await fetch(`https://api.lolhuman.xyz/api/pixiv?apikey=${global.lolkey}&query=${text}`)
  var res = await dann.json()
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6288980870067@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  await conn.reply(m.chat, fkonn)
  conn.sendFile(m.chat, res.result[0].image, '', res.result[0].title, m)
  } catch (e) {
    console.log(e);
    m.reply(`🐱 Failed to search ${text}`);
  }
}

handler.command = handler.help = ['pixiv']
handler.tags = ['internet']
handler.limit = true
module.exports = handler