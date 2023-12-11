let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) throw `*Example:* .${command} https://vm.tiktok.com/xxxxx`
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://api.xfarr.com/api/download/tiktokmusic?apikey=Kemii&url=${text}`)
  try {
  let res = await kemii.json()
  let start = new Date();
await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
  await conn.sendMessage(m.chat, {
    audio: {
      url: `${res.result.url}`
    },
    mimetype: 'audio/mp4',
    fileName: `${res.result.title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        mediaType: 1,
        body: '𝘿 𝙀 𝙑 𝙄 𝙉 𝘼 - 𝙈 𝙐 𝙇 𝙏 𝙄  𝘿 𝙀 𝙑 𝙄 𝘾 𝙀シ︎',
        thumbnailUrl: `${res.result.thumbnail}`,
        renderLargerThumbnail: true
        }}},{quoted: m})
   } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await m.reply(`𝙇𝙞𝙣𝙠 𝙮𝙖𝙣𝙜 𝙠𝙖𝙢𝙪 𝙗𝙚𝙧𝙞𝙠𝙖𝙣 𝙩𝙞𝙙𝙖𝙠 𝙗𝙚𝙣𝙖𝙧!`);
  }
}
handler.help = ['tiktokmp3'];
handler.tags = ['downloader'];
handler.command = /^(tiktokmp3|ttmp3|tiktokaudio)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;