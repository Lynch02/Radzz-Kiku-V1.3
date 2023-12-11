let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Input Url!'
  let kemii = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${global.lolkey}&url=${text}`)
  let res = await kemii.json()
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let hasil = `Title: ${res.result.title}\nTag: ${res.result.tag}\nLike: ${res.result.likes}\nViews: ${res.result.views}\nUploader: ${res.result.uploader}\nDuration: ${res.result.duration}`
  conn.sendFile(m.chat, res.result.nowm, 'cocofun.mp4', `${hasil}`, m)
}
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^cocofun$/i
handler.premium = false

module.exports = handler    