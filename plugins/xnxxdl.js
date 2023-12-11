let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .xnxxdl https://www.xnxx.com/xxxx'
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://xzn.wtf/api/xnxxdl?urlxnxx=${text}&apikey=${global.xzn}`)
  let res = await kemii.json()
  let start = new Date();
  conn.sendFile(m.chat, res.url, 'xnxx.mp4', 'Done', m)
}
handler.help = ['xnxxdl'];
handler.tags = ['downloader'];
handler.command = /^(xnxxdl)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;