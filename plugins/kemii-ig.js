let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) throw `*Example*: ${command} https://www.instagram.com/p/ABC123/`
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://skizo.tech/api/igdl?url=${text}&apikey=${global.skizo}`)
  let res = await kemii.json()
  let start = new Date();
  await conn.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
  let te = `🐱 Fetching: *${new Date() - start} ms*`;
  conn.sendFile(m.chat, res.media, 'instagram.mp4', te, m)
}
handler.help = ['ig', 'igdl', 'instagram'];
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;

module.exports = handler;