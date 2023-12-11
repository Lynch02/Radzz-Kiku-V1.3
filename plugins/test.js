exports.run = {
   usage: ['suitpvp'],
   hidden: ['suit'],
   use: 'reply chat',
   category: 'group',
   async: async (m, {
      client,
      isBotAdmin
   }) => {
      client.suit = client.suit ? client.suit : {}
  if (Object.values(client.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya'
  if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(client.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `Ketik "terima/ok/gas" untuk memulai suit\nKetik "tolak/gabisa/nanti" untuk menolak`
  client.suit[id] = {
    chat: await client.reply(m.chat, `${caption}\n\n${footer}`, m, { mentions: client.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (client.suit[id]) client.reply(m.chat, `_Waktu suit habis_`, m)
      delete client.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
   },
   error: false,
   group: true
}