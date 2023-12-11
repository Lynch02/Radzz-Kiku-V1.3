let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
    if (!text) throw `Masukkan Username!\n\nContoh: ${usedPrefix + command} dannalwaysalone`
    let dann = await fetch(`https://api.lolhuman.xyz/api/igstory/${text}?apikey=gunturganteng`)
    let res = await dann.json()
    if (!res.result) throw 'Username tidak ditemukan!'
    await m.reply(wait)
    conn.sendFile(m.chat, res.result[0], '', wm, m)
    } catch (e) {
        await m.reply(e)
    }
}

handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
handler.limit = true
handler.group = false

module.exports = handler
