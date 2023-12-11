const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
process.env.TZ = 'Asia/Jakarta'
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  'start': 'S T A R T  B O T',
  'main': 'M A I N  C O U R S E',
  'downloader': 'D O W N L O A D',
  'sticker': 'S T I C K E R',
  'advanced': 'A D V A N C E D',
  'xp': 'E X P',
  'fun': 'F U N',
  'game': 'G A M E S',
  'jadian': 'J A D I A N',
  'group': 'G R O U P',
  'admin': 'A D M I N D',
  'vote': 'V O T E',
  'catatan': 'C A T A T A N',
  'absen': 'A B S E N',
  'islami': 'I S L A M I',
  'maker': 'M A K E R',
  'convert': 'C O N V E R T',
  'diffusion': 'D I F F U S I O N',
  'store': 'S T O R E',
  'anonymous': 'I  H A V E  N O  N A M E',
  'info': 'I N F O',
  'internet': 'I N T E R N E T',
  'quotes': 'Q U O T E S',
  'audio': 'S O U N D',
  'kerang': 'S H E L L',
  'owner': 'O W N E R',
  'database': 'D A T A B A S E',
  'anime': 'A N I M E  M E N U',
  'premium': 'P R E M I U M',
  'rpg': 'R P G  G A M E S',
  'rpgabsen': 'R P G  A B S E N',
  'nsfw': 'N S F W',
  'asupan': 'A S U P A N',
  'tools': 'T O O L S',
}
const defaultMenu = {
  before: `
☯︎▰【  *B O T  U S E R S*  】▰☯︎

☘︎ 𝗨𝘀𝗲𝗿 : %totalf
☘︎ 𝗨𝘀𝗲𝗿 : %totalreg
☘︎ 𝗥𝗲𝗴𝗶𝘀𝘁 : %rtotalreg
☘︎ 𝗖𝗵𝗮𝘁 𝗯𝗮𝗻 : 0 User
☘︎︎︎ 𝗨𝘀𝗲𝗿 𝗯𝗮𝗻 : 0 User

☯︎▰【  *S T A T I S T I C*  】▰☯︎

𒊹𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : %version
𒊹𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Linux
𒊹𝗨𝗽𝘁𝗶𝗺𝗲 : %uptime
𒊹𝗠𝗲𝗺𝗼𝗿𝗶 𝗨𝘀𝗲𝗱 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} GB
𒊹𝗠𝗲𝗺𝗼𝗿𝘆 𝗧𝗼𝘁𝗮𝗹 : ${Math.round(require('os').totalmem / 1024 / 1024)} TB

𝙉𝙤𝙩𝙚: 𝙆𝙖𝙡𝙤 𝙖𝙙𝙖 𝙢𝙖𝙨𝙖𝙡𝙖𝙝 𝙖𝙩𝙖𝙪𝙥𝙪𝙣 𝙥𝙚𝙧𝙡𝙪 𝙥𝙖𝙙𝙖 𝙗𝙤𝙩 𝙨𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙘𝙝𝙖𝙩 𝙤𝙬𝙣𝙚𝙧☕︎  *.owner*
\n`.trimStart(),
  header: '╔══𖦹➤〔 *%category* 〕',
  body: `║●➪ %cmd`,
  footer: '╚══════════════❏',
  after: ' Radzz',
}
let handler = async (m, { conn, usedPrefix: _p }) => {
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
let kemii = fs.readFileSync('./mp3/kemii.mp3') 
let name = await conn.getName(m.sender)
const fcon = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${name}`,}}}
conn.sendPresenceUpdate("composing", m.chat)
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role, totalf,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
await conn.sendMessage(m.chat, {
    document: myfile, 
          mimetype: minety, 
          pageCount: 2023,
          fileName: `Hello ${name} 🐰`,
          fileLength: 100000000000000,
          caption: text, 
          contextInfo: {
            forwardingScore: 2023, 
            isForwarded: true,
            externalAdReply: {
              title: `© ${global.author}`,
              mediaType: 1,
              thumbnailUrl: ppUrl,
              mediaUrl: sig,
              thumbnail: ``,
              sourceType: ``,
              sourceId: ``,
              sourceUrl: gcbot,
              containsAutoReply: true,
              renderLargerThumbnail: true,
              showAdAttribution: false,
              ctwaClid: ``,
              ref: ``
            }
          }
        }, {
          quoted: m
        })
        //await conn.sendFile(m.chat, kemii, '', '', m, true)
//Sazumi Kemii
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
handler.command = /^(menuall|allmenu)$/i;

handler.register = true;
handler.limit = true;

module.exports = handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Good morning'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Good morning'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Good afternoon'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Good afternoon'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Good afternoon'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Good night'
        } else {
          ucapanWaktu = 'Good night'
        }	
        return ucapanWaktu
}