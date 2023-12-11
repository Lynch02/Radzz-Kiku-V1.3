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

handler.customPrefix = /^(kok gw|lah|bjir|njir|otw|ya|yoi|biasa|mana|pm|cape gw|nanti|besok|berapa?|males|gaktau|cape|kenapa)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/db087567eab3bbe5046a2.png",//patrick huu
 "https://telegra.ph/file/db90ef93d3a0b5b3e8dee.png",//anime yntkts
 "https://telegra.ph/file/5f6079714851d9927697e.png",//windah bocil
 "https://telegra.ph/file/bb0278a7595d816c16ed1.png",//patrick bawa minum
 "https://telegra.ph/file/4d9b276e51f14bf89f8f2.png",//pak polisi pap tt
 "https://telegra.ph/file/6164533b6d2325fb9e823.png",//kucing1
 "https://telegra.ph/file/0d2d7a10a211a4e5b7835.png",//kacamata
 "https://telegra.ph/file/49438ffb3dd1baa27255b.png",//patrick pembohong
 "https://telegra.ph/file/cb3c0359878c9586135af.png",//spongebob FBI
 "https://telegra.ph/file/c7485b8c7be970ebc78c5.png",//mazowski monster inc
 "https://telegra.ph/file/2463c0a3ab47fc3789c38.png",//wkwk
 "https://telegra.ph/file/ac965dba2b4736d2e47e9.png",//kucing2
 "https://telegra.ph/file/17fd8c65e15150997a50f.png",//patrick anak setan
 "https://telegra.ph/file/0c7cb8f022af3d7d967d7.png",//mazowski 2
 "https://telegra.ph/file/ce4d47005b70ee2c34434.png",//hengker
 "https://telegra.ph/file/3c2acc9f264438e544bcd.png",//anjing
 "https://telegra.ph/file/7c2b5d27977ff071def95.png",//bapak bapak lovee
 "https://telegra.ph/file/3adb42bcdc511b5ecb16f.png",//abang saleh
 "https://telegra.ph/file/106fbcf417c24e22af372.png",//hengker2
 "https://telegra.ph/file/3579456902224da916dfd.png",
 "https://telegra.ph/file/efdf42d12e31625383f2a.png"
]