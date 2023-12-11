const fg = require('api-dylux');
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper');

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) {
    conn.sendPresenceUpdate("composing", m.chat)
    throw `*Example:* .tiktok https://vm.tiktok.com/xxxxx`;
  }
  if (!args[0].match(/tiktok/gi)) {
    throw '🐱 Make sure the link is from TikTok';
  }
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let start = new Date();
  try {
    let p = await fg.tiktok(args[0]);
    let te = `🐱 Fetching: *${new Date() - start} ms*`;
    conn.sendPresenceUpdate("composing", m.chat)
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m);
    conn.sendMessage(m.chat, {
      react: {
        text: '✅',
        key: m.key,
      }
    });
  } catch (error) {
    m.reply('Failed :(')
  }
};

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;