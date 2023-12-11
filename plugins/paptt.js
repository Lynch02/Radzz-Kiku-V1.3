let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply('Foto Sudah Terkirim Ke Chat Pribadi >_<')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.sender, pickRandom(paptt), null, `Nih, dasar sangean㋛︎ *${name}*`, m)
}
handler.help = ['paptt']
handler.tags = ['info']
handler.command = /^(paptt|papbody)$/i

handler.premium = true
handler.limit = true
handler.level = false
handler.group = true

handler.fail = null
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const paptt = [

 "https://telegra.ph/file/92b8915d2cadce3fb84a9.jpg",
 "https://telegra.ph/file/270c3acc2e29a7f940d7e.jpg",
 "https://telegra.ph/file/fe5ef1beeef9ffbc7e035.jpg",
 "https://telegra.ph/file/d23674ba723565334ffe2.jpg",
 "https://telegra.ph/file/0f4b3ccc7c6c8942f956d.jpg",
 "https://telegra.ph/file/60fe6d4f2ff1b26f3b27b.jpg",
 "https://telegra.ph/file/847d00de6c750a23b5b6d.jpg",
 "https://telegra.ph/file/b6d2b71f013cd4ba03a62.jpg",
 "https://telegra.ph/file/eb3643a4c159f17d827ad.jpg",
 "https://telegra.ph/file/62e386a7870e0aa988a75.jpg",
 "https://telegra.ph/file/0ed392ad692cdcb7e50b8.jpg",
 "https://telegra.ph/file/7b7a7feeb23da85f4d203.jpg",
 "https://telegra.ph/file/059c86ceb9cff4c7e76df.jpg",
 "https://telegra.ph/file/e1a30bd6f7c5d53d4453f.jpg",
 "https://telegra.ph/file/82524f88207167cbd2fcf.jpg",
 "https://telegra.ph/file/56dc68d9ef44e5de0f48f.jpg",
 "https://telegra.ph/file/99a81de7f0606298dddec.jpg",
 "https://telegra.ph/file/ab20692bdb4e0baafa31c.jpg",
 "https://telegra.ph/file/22704d4cf8a39bcf2ab04.jpg",
 
]