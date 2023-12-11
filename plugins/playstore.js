var fetch = require('node-fetch');
var limit = 5;

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Aplikasi!\n\nContoh: ${usedPrefix + command} freefire`;
  
  var dann = await fetch(`https://api.lolhuman.xyz/api/playstore?apikey=ayakaviki&query=${text}`);
  var res = await dann.json();
  var hasil = '';
  
  for (var i = 0; i < res.result.length; i++) {
    hasil += `
• Title: *${res.result[i].title}*
• ID: *${res.result[i].appId}*
• Developer: *${res.result[i].developer}*
• Developer ID: *${res.result[i].developerId}*
• Currency: *${res.result[i].currency}*
• Price: *${res.result[i].price}*
• Free: *${res.result[i].free}*
• Summary: *${res.result[i].summary}*
• Score: *${res.result[i].score}*
• Score Text: *${res.result[i].scoreText}*
• URL: *${res.result[i].url}*
`;
  }

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  await conn.sendFile(m.chat, res.result[0].icon, '', hasil, m);
};

handler.command = handler.help = ['playstore'];
handler.tags = ['tools', 'internet'];
handler.limit = true;

module.exports = handler;