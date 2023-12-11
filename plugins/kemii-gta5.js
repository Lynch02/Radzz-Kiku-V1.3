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
  let hasil = await fetch(`https://xzn.wtf/api/aimirrorvip?&apikey=${global.xzn}&url=${url}&filter=gta5`)
  let res = await hasil.json()
  await conn.sendFile(m.chat, res.generated_image_addresses, 'gta5.jpg', '🐱 Successfully converted', m)
}

handler.help = ['gta5']
handler.tags = ['convert']
handler.premium = false
handler.command = /^(gta5)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler