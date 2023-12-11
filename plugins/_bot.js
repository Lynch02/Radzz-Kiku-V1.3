let handler = async (m, { conn, command }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/80468997fbc9b2392571c.jpg'
conn.sendMessage(m.chat, {
  poll: {
    name: `Silahkan Dipilih`,
    selectableCount: 1,
    values: [
      `${command}menu`,
      `${command}owner`
    ]
  }
})
}
handler.customPrefix = /^(bot|bot?|bott)$/i
handler.command = new RegExp

module.exports = handler
