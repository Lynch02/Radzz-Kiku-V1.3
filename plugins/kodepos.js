let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukkan Daerah!\n\nContoh: ${usedPrefix + command} kalimantan`
    let dann = await fetch(`https://dannteam.com/api/search/kodepos?q=${text}&apikey=zhirjUircj`)
    let res = await dann.json()
    let hasil = `Provinsi: *${res.data[0].province}*\nKota: *${res.data[0].city}*\nSubdistrict: *${res.data[0].subdistrict}*\nUrban: *${res.data[0].urban}*\nKodepos: *${res.data[0].postalcode}*`
    await m.reply(hasil)
}

handler.help = ['kodepos']
handler.tags = ['internet']
handler.command = /^kodepos$/i

module.exports = handler