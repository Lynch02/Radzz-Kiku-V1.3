let fs = require('fs')
let fetch = require('node-fetch')
 let handler = async(m, { conn }) => { 

         let caption = `*𝐉𝐎𝐈𝐍 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 𝐒𝐀𝐘𝐀*`
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "2040 - 2042 © 𝙳𝙴𝚅𝚅-𝙾𝙵𝙵𝙲☂︎",
          thumbnailUrl: 'https://telegra.ph/file/81520d042c9948b21c9ff.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
module.exports = handler