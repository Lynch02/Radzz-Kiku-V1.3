let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Send/Reply Images with the caption .${command}`
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/creator1/beautiful?apikey=${global.lolkey}&img=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', 'Suksess', m)
}
handler.help = ['beautiful']
handler.tags = ['maker']
handler.command = /^(beautiful)$/i
handler.limit = true

module.exports = handler
