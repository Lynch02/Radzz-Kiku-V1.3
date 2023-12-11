var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example: ${usedPrefix + command} avatar`
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  var kemii = await fetch(`https://api.neoxr.eu/api/film?q=${text}&apikey=Salsabila`)
  var res = await kemii.json()

  var resultText = ''
  for (let i = 0; i < res.data.length; i++) {
    var result = res.data[i]
    var hasil = `• Title: *${result.title}*• Tags: *${result.tags}*\n• Directors: *${result.directors}*\n• Actors: *${result.actors}*\n• Link: *${result.url}*\n`
    resultText += hasil + '\n'
  }
  var thumb = res.data[0].thumbnail
  var name = m.sender
  var fkonn = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {})
    },
    message: {
      contactMessage: {
        displayName: await conn.getName(name),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  }
  conn.sendMessage(m.chat, {
    text: resultText,
    contextInfo: {
      externalAdReply: {
        title: 'Film Search - Kikuchanj',
        thumbnailUrl: thumb,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.help = ['film'].map(v => v + ' <text>')
handler.tags = ['internet']

handler.command = /^film|filem$/i
handler.premium = false

module.exports = handler