let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let kemii = await fetch(`http://skizo.tech/api/tttrending?region=ID&apikey=${global.skizo}`)
  let res = await kemii.json()
  let salsa = `
➪ Title : ${res.title}
➪ Views : ${res.play_count}
➪ Likes : ${res.digg_count}
➪ Comments : ${res.comment_count}
➪ Share : ${res.share_count}
➪ Download : ${res.download_count}
➪ Author : ${res.author.nickname}
➪ Nickuser : ${res.author.unique_id}`
  conn.sendFile(m.chat, res.play, 'tiktokt.mp4', salsa, m)
}
handler.help = ['tiktoktrending']
handler.tags = ['downloader']

handler.command = /^tiktokt|tiktoktrending|tttrending$/i
handler.premium = false

module.exports = handler