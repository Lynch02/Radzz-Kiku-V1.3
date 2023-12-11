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

handler.customPrefix = /(futsal|Futsal|FUTSAL|fustal|Fustal|FUTSAL)/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/4df9e7cd5e974e40e935e.jpg",//Masih Oe Pantau
 "https://telegra.ph/file/ff00caaff2697e38bd4dd.jpg",//Kepala Adudu
 "https://telegra.ph/file/85714c4800479ac90067a.jpg",//Oe tidur loo
 "https://telegra.ph/file/86e25ea582c7a15ca7a5d.jpg",//Senyum KIP
 "https://telegra.ph/file/7a6257fa5aeaa5d1ff2f7.jpg",//Duta Abrag
 "https://telegra.ph/file/dd74432344b8f5bd92459.jpg",
 "https://telegra.ph/file/e9a11ed4dc56a5c1ec84a.jpg",
 "https://telegra.ph/file/67ad93c6586bbf20be47b.jpg",
 "https://telegra.ph/file/9550bf753ea7c78e8ecc5.jpg"
]
