let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Send/Reply Images with the caption *.${command}*`
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await fetch(`https://xzn.wtf/api/aimirror?&apikey=${global.xzn}&url=${url}&filter=pretty_soldier`)
  let res = await hasil.json()
  await conn.sendFile(m.chat, res.generated_image_addresses, 'pretty.jpg', '🐱 Successfully converted', m)
}

handler.help = ['pretty_soldier']
handler.tags = ['convert']
handler.premium = false
handler.command = /^(pretty_soldier)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler