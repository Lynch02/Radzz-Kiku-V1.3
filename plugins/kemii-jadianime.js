let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Send/Reply Images with the caption *.jadianime*'
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await (await fetch(`https://skizo.tech/api/toanime?url=${url}&apikey=${global.skizo}`)).buffer()
  await conn.sendFile(m.chat, hasil, '', 'Successfully converted', m)
}

handler.help = ['jadianime']
handler.tags = ['convert']
handler.premium = false
handler.command = /^(jadianime)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler