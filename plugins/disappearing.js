const { WA_DEFAULT_EPHEMERAL } = require('@whiskeysockets/baileys')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukkan Nomor!\n\nContoh: ${usedPrefix + command} 6288980870067`
    let jid = `${text}@whatsapp.net`
    let data = (await conn.onWhatsApp(jid))[0] || {}
    if (!data.exists) throw 'Nomor tidak terdaftar di WhatsApp!'
    await conn.sendMessage(data.jid, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
    await conn.sendMessage(data.jid, { text: 'Done!'}, { ephemeralExpiration: WA_DEFAULT_EPHEMERAL })
}

handler.command = handler.help = ['disappearing']
handler.tags = ['tools']
handler.private = true

module.exports = handler