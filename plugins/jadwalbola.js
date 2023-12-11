let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/jadwalbola?apikey=gunturganteng')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let hasil = `Waktu: *${json.result[0].time}*\nEvent: *${json.result[0].event}*\nMatch: *${json.result[0].match}*\nTV: *${json.result[0].tv}*`
  conn.sendMessage(m.chat, {
    text: hasil,
    contextInfo: {
    externalAdReply: {
    title: namebot,
    body: wm,
    thumbnailUrl: thumb,
    sourceUrl: sig,
    mediaType: 1,
    renderLargerThumbnail: true
    }}})

}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^jadwalbola$/i
handler.limit = true


module.exports = handler