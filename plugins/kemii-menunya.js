let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key }})
let { limit, role, level, exp, premiumDate } = db.data.users[m.sender]
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id'
let kemii = fs.readFileSync('./mp3/menu1.mp3') 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
☘︎︎ 𝙃𝙖𝙞 𝙠𝙖𝙠 𝙨𝙖𝙮𝙖 𝙖𝙙𝙖𝙡𝙖𝙝 𝙒𝙖𝙗𝙤𝙩 𝙮𝙖𝙣𝙜 𝙙𝙞𝙗𝙪𝙖𝙩 𝙤𝙡𝙚𝙝 𝓡𝓪𝓭𝔃𝔃 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵. 𝙖𝙙𝙖 𝙮𝙖𝙣𝙜 𝙗𝙞𝙨𝙖 𝙙𝙞 𝙗𝙖𝙣𝙩𝙪?シ︎.

☘︎ *𝙄 𝙉 𝙁 𝙊 𝙍 𝙈 𝘼 𝙏 𝙄 𝙊 𝙉* ☘︎

•➤︎ 𝗡𝗮𝗺𝗲 : ${name}
•➤ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${uptime}
•➤ 𝗠𝗼𝗱𝗲 : ${global.opts['self'] ? 'Self' : 'Publik'}
•➤ 𝗢𝘄𝗻𝗲𝗿 : @𝓡𝓪𝓭𝔃𝔃 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵☂︎
•➤ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${global.author}
•➤ 𝗕𝗼𝘁 𝗧𝘆𝗽𝗲 : 𝗠𝘂𝗹𝘁𝗶 𝗗𝗲𝘃𝗶𝗰𝗲
•➤ 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
•➤ 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀 : ${totalf}
•➤ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝘂𝘀𝗲𝗱 : ${Object.entries(db.data.stats).length}
•➤ 𝗗𝗮𝘁𝗲 : ${week}, ${date}
•➤ 𝗧𝗶𝗺𝗲 : ${time}

☘︎︎  *𝙇𝙄𝙎𝙏 - 𝙈𝙀𝙉𝙐*  ☘︎

✿➪ .𝗺𝗲𝗻𝘂𝗺𝗮𝗶𝗻᯽
✿➪ .𝗺𝗲𝗻𝘂𝗼𝘄𝗻𝗲𝗿᯽
✿➪ .𝗺𝗲𝗻𝘂𝗴𝗮𝗺𝗲𝘀᯽
✿➪ .𝗺𝗲𝗻𝘂𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱᯽
✿➪ .𝗺𝗲𝗻𝘂𝘀𝘁𝗶𝗰𝗸𝗲𝗿᯽
✿➪ .𝗺𝗲𝗻𝘂𝗺𝗮𝗸𝗲𝗿᯽
✿➪ .𝗺𝗲𝗻𝘂𝗰𝗼𝗻𝘃𝗲𝗿𝘁᯽
✿➪ .𝗺𝗲𝗻𝘂𝗱𝗶𝗳𝗳𝘂𝘀𝗶𝗼𝗻᯽
✿➪ .𝗺𝗲𝗻𝘂𝗮𝗻𝗶𝗺𝗲᯽
✿➪ .𝗺𝗲𝗻𝘂𝗴𝗿𝗼𝘂𝗽᯽

シ︎ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ sᴇᴍᴜᴀ ғɪᴛᴜʀ ᴍᴇɴᴜ ᴋᴇᴛɪᴋ _*.allmenu*_`
conn.sendPresenceUpdate("composing", m.chat)
await conn.sendMessage(m.chat, {
text: Styles(menyu),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `⚓ 𝓡𝓪𝓭𝔃𝔃 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵 𝓑𝓸𝓽 ⚓`,
thumbnailUrl: ppUrl,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await conn.sendFile(m.chat, kemii, '', '', m, true)
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.customPrefix = /^(.menu|menu|help|menunya)$/i
handler.command = new RegExp
handler.register = true;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙋𝙖𝙜𝙞"
  if (time >= 4) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙋𝙖𝙜𝙞"
  }
  if (time >= 10) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙎𝙤𝙧𝙚"
  }
  if (time >= 15) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙎𝙤𝙧𝙚"
  }
  if (time >= 18) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙈𝙖𝙡𝙖𝙢"
  }
  return res
}