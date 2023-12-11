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

handler.customPrefix = /(boden|Boden|BODEN|raden|Raden|RADEN)/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/52f164e1ad793a7934461.png",//Masih Oe Pantau
 "https://telegra.ph/file/3b3693ad22c032663b6f0.png",//Kepala Adudu
 "https://telegra.ph/file/73ee54190104563dbab3e.png",//Oe tidur loo
 "https://telegra.ph/file/691b0d912d662d56159f7.png",//Senyum KIP
 "https://telegra.ph/file/3fa65074f1fd3d9a8d3b3.png",//Duta Abrag
 "https://telegra.ph/file/c99ef351ecc8dc1618211.png",//Senyum Fengsui
 "https://telegra.ph/file/5f1c84d906f469b409bde.jpg",//Ok
 "https://telegra.ph/file/3ab6c24651d27c8bb6909.jpg",//Masih Gua Liatin
 "https://telegra.ph/file/47ef4d4ec57e75b28d58d.jpg",//Tidak Menarik
 "https://telegra.ph/file/ec6f89f57d23d0d143c80.jpg",//Sangad Thanoshi
 "https://telegra.ph/file/04b4d21f2582db373d144.jpg",//Lu Olang Bodoh
 "https://telegra.ph/file/d6245cff5a985dff4dfcc.jpg",//Sok Asik Lu
 "https://telegra.ph/file/73dad67d271a45fa12b32.jpg",//
 "https://telegra.ph/file/466ce7cebf75673921476.jpg",//
 "https://telegra.ph/file/6ff2ecc4cffbc88791819.jpg",// 
 "https://telegra.ph/file/bbbc26867874d99f62d38.jpg",//v 
 "https://telegra.ph/file/d6da5d0f1dada35cb5634.jpg",//  
 "https://telegra.ph/file/c55853b5999184efcf602.jpg",// 
 "https://telegra.ph/file/6d003dbd1515f41db78d1.jpg",//
 "https://telegra.ph/file/ca984ab6a97d62a6bc3e2.jpg",
 "https://telegra.ph/file/82aa8c129ee81981620e5.jpg",
 "https://telegra.ph/file/0b298e5b0edb406fc8035.jpg",
 "https://telegra.ph/file/2a044d9ee8c9ad681a55e.jpg",
 "https://telegra.ph/file/45831cbdabb53823381f8.jpg",
 "https://telegra.ph/file/c50b4941b9160dbd379db.jpg"
]
