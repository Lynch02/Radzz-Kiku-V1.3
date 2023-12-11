let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} lisaamelia09_`
let f = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=gunturganteng`)
let x = await f.json()
let cap = `${htki} Info Detail Tiktok ${htka}
Usename : @${x.result.username}
Name : ${x.result.nickname}
Followers : ${x.result.followers}
Followings : ${x.result.followings}
Likes : ${x.result.likes}
Video : ${x.result.video}
Bio : ${x.result.bio}`
conn.sendFile(m.chat, x.result.user_picture, 'stalk.jpg', `${cap}`, m)
  }
handler.help = ['stalktiktok'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(stalktiktok|stalktt)$/i

module.exports = handler