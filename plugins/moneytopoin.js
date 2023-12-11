let handler = async (m, { args }) => {
  if (args.length !== 1) {
    throw 'Silakan masukkan jumlah uang yang ingin diubah menjadi poin! Contoh: .moneytopoin 1000'
  }
  let money = parseInt(args[0])
  if (isNaN(money) || money <= 0) {
    throw 'Jumlah uang yang dimasukkan harus angka positif!'
  }
  let fee = Math.floor(money * 0.5)
  let poin = Math.floor(money * 0.5)
  let message = `• Kamu menconvert uang senilai ${money}\n`
  message += `• Dan kamu mendapatkan poin senilai ${poin}\n`
  message += `• Biaya fee kamu adalah ${fee}`
  let user = global.db.data.users[m.sender]
  if (!user) {
    user = { poin: 0 }
    global.db.data.users[m.sender] = user
  }
  user.poin = (user.poin || 0) + poin
  global.db.write()
  m.reply(message)
}

handler.help = ['moneytopoin <jumlah uang>']
handler.tags = ['game']
handler.command = /^moneytopoin$/i
handler.register = true
handler.limit = true

module.exports = handler