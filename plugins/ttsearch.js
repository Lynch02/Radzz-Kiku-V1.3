let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
let tagnya = `@${m.sender.split`@`[0]}`
if (!isCreator&&!isPrems) return m.reply('Khusus Premium')
if (!text) return m.reply(`Gunakan dengan cara ${usedPrefix}${command} *query*\n\n_Contoh_\n\n${usedPrefix}${command} jj epep`)
m.reply('_In Process, Please Wait...._')
try{
let anu = await fetchJson(`https://api.xcodeteam.xyz/api/ttsearch?search=${text}&apikey=sk-6fz59ebzdfyucnubo`)
const capt = anu.title
const author = anu.author.nickname
conn.sendMessage(m.chat, { video: { url: anu.play}, caption: `💬 Caption : ${capt}\n👤 Author : ${author}`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
} 
handler.help = ['ttsearch']
handler.tags = ['downloader']
handler.command = /^(ttsearch)$/i

module.exports = handler
