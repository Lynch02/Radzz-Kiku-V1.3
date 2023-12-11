const isLinkGc = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri
const isLinkHttp = /http|https/i // tambahin sendiri
let handler = m => m

handler.before = async function (m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    
   
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkGc = isLinkGc.exec(m.text)
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)
    const isAntiLinkHttp = isLinkHttp.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id

    if (chat.antiLinkGc && isAntiLinkGc) {
    if (isBotAdmin) {
    const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        let dann = `Terdeteksi ${name} telah mengirim Link *Group*!\n\n${isBotAdmin ? '' : '\n\nJadikan bot sebagai admin terlebih dahulu!'}`
        await m.reply(dann)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!isBotAdmin) return m.reply('Kamu admin, tidak bisa dikick')
    }
    
    if (chat.antiLinkTik && isAntiLinkTik) {
        let danzz = `Terdeteksi ${name} telah mengirim Link *Tiktok*!\n\n${isBotAdmin ? '' : '\n\nJadikan bot sebagai admin terlebih dahulu!'}`
        await m.reply(danzz)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Kamu admin, tidak bisa dikick')
    }
    
    if (chat.antiLinkYt && isAntiLinkYt) {
        let dannn =  `Terdeteksi ${name} telah mengirim Link *YouTube*!\n\n${isBotAdmin ? '' : '\n\nJadikan bot sebagai admin terlebih dahulu!'}`
        await m.reply(dannn)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Kamu admin, tidak bisa dikick')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        let dann3 = `Terdeteksi ${name} telah mengirim Link *Telegram*!\n\n${isBotAdmin ? '' : '\n\nJadikan bot sebagai admin terlebih dahulu!'}`
        await m.reply(dann3)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Kamu admin, tidak bisa dikick')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        let dann2 = `Terdeteksi ${name} telah mengirim Link *Facebook*!\n\n${isBotAdmin ? '' : '\n\nJadikan bot sebagai admin terlebih dahulu!'}`
        await m.reply(dann2)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Kamu admin, tidak bisa dikick')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg) {
        let dan = `Terdeteksi ${name} telah mengirim Link *Instagram*!\n\n${isBotAdmin ? '' : '\n\nJadikan bot sebagai admin terlebih dahulu!'}`
        await m.reply(dan)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Kamu admin, tidak bisa dikick')
    }
    
    if (chat.antiLinkHttp && isAntiLinkHttp) {
        let dannyell = `Terdeteksi ${name} telah mengirim Link *HTTPS*!\n\n${isBotAdmin ? '' : '\n\nJadikan bot sebagai admin terlebih dahulu!'}`
        await m.reply(dannyell)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Kamu admin, tidak bisa dikick')
    }
    return !0
}
module.exports = handler