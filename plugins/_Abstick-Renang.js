let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
//let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)  
}

handler.customPrefix = /(renang|Renang|RENANG|swiming|Swiming|SWIMING)/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/4b3aadb9ed533bbb97216.jpg",//Masih Oe Pantau
 "https://telegra.ph/file/4c5063e44b17940f51850.jpg",//Kepala Adudu
 "https://telegra.ph/file/925719665123891856c78.jpg",//Oe tidur loo
 "https://telegra.ph/file/fae1eac1792f123593983.jpg",//Senyum KIP
 "https://telegra.ph/file/c44e6bb8da7c221eb4dab.jpg",//Duta Abrag
 "https://telegra.ph/file/41c19e29b681727ea5075.jpg"
]
