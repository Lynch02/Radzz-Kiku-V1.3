let handler = async (m) => {
  let poin = global.db.data.users[m.sender].poin || 0
  m.reply(`Poin kamu: ${poin}`)
}

handler.help = ['cekpoin']
handler.tags = ['game']
handler.command = /^cekpoin$/i
handler.register = true
handler.limit = true

module.exports = handler