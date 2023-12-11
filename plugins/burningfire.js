let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Send/Reply Images with the caption *.burningfire*'
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await (await fetch(`https://api.lolhuman.xyz/api/photofunia/burningfire?apikey=${global.lolkey}&img=${url}`)).buffer()
  await conn.sendImageAsSticker(m.chat, hasil, m, { packname: "sticker by", author: "Kemii" })
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
}

handler.help = ['burningfire']
handler.tags = ['tools']
handler.premium = false;
handler.command = /^(burningfire)$/i
handler.register = true
handler.limit = true

module.exports = handler