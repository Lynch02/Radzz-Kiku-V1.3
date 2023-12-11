const axios = require('axios');
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, usedPrefix, command, args, text }) => {
  let style = (args[0] || '').toLowerCase();
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  let listStyle = `┌ ◦ Use Format: *.${command} <style>*
└ ◦ Example: *.${command} anime_2d*

*— L I S T - S T Y L E*

┌ ◦ maid_dressing
│ ◦ anime_2d
│ ◦ pretty_soldier
│ ◦ bizarre
│ ◦ romance_comic
│ ◦ superhero_comic
│ ◦ watercolor
│ ◦ doodle
│ ◦ america_comic
└ ◦ starry_girl

*Note:* Reply/Send Image with caption .${command} <style>`;

    if (/makerdiff|jadi|makerdif/i.test(command)) {
      switch (style) { 
        case 'maid_dressing':
        case 'anime_2d':
        case 'pretty_soldier':
        case 'bizarre':
        case 'superhero_comic':
        case 'doodle':
        case 'romance_comic':
        case 'watercolor':
        case 'cutie_9':
        case 'manhwa':
        case 'america_comic':
        case 'starry_girl':
        if (!mime) throw `Send/Reply Images with captions .${command} ${style ? style : 'anime_2d'}`;
          conn.sendMessage(m.chat, {
            react: {
              text: '🕒',
              key: m.key,
            }
          });
          let media = await q.download();
          let url = await uploadImage(media);
          let hasil = await fetch(`https://xzn.wtf/api/aimirror?&apikey=${global.xzn}&url=${url}&filter=${style.toUpperCase()}`)
          let res = await hasil.json()
          return conn.sendFile(m.chat, res.generated_image_addresses, 'ppk2.jpg', `STYLE: ${style.toUpperCase()}`, m);
        default:
                        return conn.sendMessage(m.chat, {
text: listStyle,
contextInfo: {
externalAdReply: {
title: "M A K E R D I F F 2",
body: 'The following styles are available',
thumbnailUrl: "https://telegra.ph/file/a82ad1b37cac63de1ba70.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
  } else {
  m.reply('Invalid command')
  }
};

handler.tags = ['tools'];
handler.command = /^(makerdif2|jadi2|makerdiff2)$/i
handler.help = ['makerdiff2'];
handler.limit = true;

module.exports = handler;