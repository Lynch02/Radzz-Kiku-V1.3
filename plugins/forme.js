let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
  let dann = 'Ini hadiah untuk kamu!\n\nhttps://hadiah.dannteam.com\nJangan lupa di klik :)'
setTimeout(() => {
// Pengiriman
conn.sendMessage(m.chat, {
text: dann,
contextInfo: {
externalAdReply: {
title: namebot,
body: wm,
thumbnailUrl: './thumbnail.jpg',
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}})
}, 15000)
setTimeout(() => {
conn.reply(m.chat, 'Ciee.. nungguin nih hehe', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, 'Mau liat nggak kamu? 😆', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, 'Aku punya kejutan spesial loh untuk mu.. 😅', m)
}, 0)
}
handler.help = ['forme']
handler.tag = ['internet']
handler.command = /^(forme)$/i

module.exports = handler