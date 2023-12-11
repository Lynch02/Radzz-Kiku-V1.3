const { MessageType } = require('@adiwajshing/baileys')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (/image|video/.test(mime)) {
    let img = await q.download()
    if (!img) throw 'Foto/Sticker tidak ditemukan'
    let media = await q.download()
    let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
    let link = await (isTele ? uploadImage : uploadFile)(media)
    conn.sendFile(m.chat, img, 'jadilokasi.jpg', wm, m, false, { asLocation: true })
  } else {
    m.reply('Tag foto/videonya!')
  }
};

handler.help = ['jadilokasi']
handler.tags = ['tools']
handler.command = /^(jadilokasi)$/i

module.exports = handler