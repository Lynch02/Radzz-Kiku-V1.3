let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix }) => {

  if (!text) throw `Contoh Penggunaan\n${usedPrefix}spamcall 628xxxxxxxx`

  let nomor = text.replace(/[^0-9]/gi, '').slice(2)

  if (!nomor.startsWith('8')) throw `Contoh Penggunaan\n${usedPrefix}spamcall 628xxxxxxxx`
  
  m.reply('Tunggu Sebentar...')

  let anu = await fetch(`https://api.lolhuman.xyz/api/spam/call1?apikey=4ec4c2205a943c2dc163cd7e&nomor=${text}`).then(a => a.json())
  
  let spcall = `*Nomor* : ${anu.phone_prefix}\n\nKikuchanj berhasil menlpon anda!`
  
  conn.reply(anu)
  conn.reply(m.chat, `${spcall}`.trim(), m)

  }

handler.help = ['spamcall <nomor>']

handler.tags = ['tools']

handler.command = /^(spamcall)$/i

handler.limit = true
handler.premium = true
handler.group = true

module.exports = handler