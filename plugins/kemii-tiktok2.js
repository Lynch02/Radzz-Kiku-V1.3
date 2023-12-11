let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .tiktok https://vm.tiktok.com/xxxxx'
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`http://skizo.tech/api/tiktok?url=${text}&apikey=${global.skizo}`)
  try {
  let res = await kemii.json()
  let start = new Date();
  let te = `*☘︎  TIKTOK VIDEO*

❏ *Author:* @${res.data.author.unique_id}
❏ *Caption:* ${res.data.title}`;
await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
  conn.sendFile(m.chat, res.data.play, 'tiktok.mp4', te, m)
   } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await m.reply(`𝙇𝙞𝙣𝙠 𝙮𝙖𝙣𝙜 𝙠𝙖𝙢𝙪 𝙗𝙚𝙧𝙞𝙠𝙖𝙣 𝙩𝙞𝙙𝙖𝙠 𝙗𝙚𝙣𝙖𝙧!`);
  }
}
handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;