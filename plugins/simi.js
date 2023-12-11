let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${global.lolkey}&text=${text}&badword=true`)
  let json = await res.json()
  if (json.result) m.reply(json.result)
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler