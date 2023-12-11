let handler = async (m, { conn, text, usedPrefix: _p }) => {
  let user = global.db.data.users[m.sender]
  let message = `
♧︎︎︎Hallo kak aku WA BOT yang dibuat oleh _radenginar. Ada Yang Bisa Saya Bantu? Ketik .menu Yaa...㋛︎ *@${m.sender.split("@")[0]}*`
conn.sendPresenceUpdate("composing", m.chat)
conn.sendMessage(m.chat, {
text: message,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: "Ketik .menu untuk menampilkan fitur bot",
thumbnailUrl: 'https://telegra.ph/file/81520d042c9948b21c9ff.jpg',
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}