let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let fs = require('fs')

let qris = 'https://telegra.ph/file/63eb556badbf78c27e50d.jpg'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
const messa = await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/63eb556badbf78c27e50d.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "6188654807917484",
"title": `𝙈𝙖𝙠𝙖𝙨𝙞𝙝 𝙮𝙖𝙣𝙜 𝙪𝙙𝙖𝙝 𝙙𝙤𝙣𝙖𝙨𝙞シ︎`,
"description": `𝙎𝙘𝙖𝙣 𝙌𝙍 𝙙𝙞 𝙖𝙩𝙖𝙨 𝙪𝙣𝙩𝙪𝙠 𝙙𝙤𝙣𝙖𝙨𝙞`,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount5000": "10000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount5000": "10000000",
"retailerId": wm,
"url": "http://wa.me/6281563245618"
},
"businessOwnerJid": "6281563245618@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi)$/i

handler.limit = true

module.exports = handler