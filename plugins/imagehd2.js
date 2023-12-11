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
  let hasil = await fetch(`https://api.neoxr.eu/api/remini2?image=${url}&apikey=Salsabila`)
  let res = await hasil.json()
  await conn.sendFile(m.chat, res.data.url, 'remini.jpg', '', m)
}

handler.help = ["enhancer", "hdr", "colorize", "hd"];
handler.tags = ["tools"];
handler.premium = false;
handler.command = ["unblur", "enchaner", "enhance", "hdr", "colorize", "hd", "remini"];
module.exports = handler;