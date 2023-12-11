const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return !0
  this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
  if (!(id in this.tebakgambar)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakgambar[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakgambar[id][2]
      global.db.data.users[m.sender].money += 141098
      await conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/ba14f31a89695620007c7.png', m, { packname: "sticker by", author: "Kemii" })
      setTimeout(() => {
      await conn.reply(m.chat, `*+ 141.098 Balance*`, m)
}, 3000)
      clearTimeout(this.tebakgambar[id][3])
      delete this.tebakgambar[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else await conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/6059151f81fb30d3a5351.png', m, { packname: "sticker by", author: "Kemii" })
  }
  return !0
}
handler.exp = 0

module.exports = handler
