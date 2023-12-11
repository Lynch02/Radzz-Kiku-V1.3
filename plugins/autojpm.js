let handler = m => m

let linkRegex = /(chat.whatsapp.com\/([0-9A-Za-z]{20,24})|(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+(com|xyz|me|my|id|io|eu\.org|biz|biz\.id)(\/[^\s]+)?)/i

handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.autoJpm && isGroupLink) {
    await conn.reply(m.chat, `𝘀𝗶𝗻𝗶 𝗮𝗸𝘂 𝗽𝗲𝗹𝘂𝗸>_<

☘︎𝙷𝙰𝙸 𝙺𝙰𝙺 𝙰𝙺𝚄 𝙰𝙳𝙰𝙻𝙰𝙷 𝚆𝙰𝙱𝙾𝚃 𝙳𝙴𝚅𝙸𝙽𝙰𝙰 𝙼𝚄𝙻𝚃𝙸 𝙳𝙴𝚅𝙸𝙲𝙴 𝚂𝙸𝙽𝙸 𝙱𝙴𝚁𝙼𝙰𝙸𝙽 𝙱𝙴𝚁𝚂𝙰𝙼𝙰 𝙰𝙺𝚄 𝙳𝙴𝙽𝙶𝙰𝙽 𝙶𝙰𝙱𝚄𝙽𝙶 𝙳𝙸 𝙺𝙾𝙼𝚄𝙽𝙸𝚃𝙰𝚂 & 𝙶𝚁𝙾𝚄𝙿 𝙰𝙺𝚄༼ つ ◕◡◕ ༽つ

G𝚁𝙾𝚄𝙿 𝙱𝙾𝚃 𝚂𝙰𝚈𝙰
https://chat.whatsapp.com/KKYwJ1sCOtq4Vq6nB2P6ET

𝗔𝗗𝗔 500+ 𝗙𝗜𝗧𝗨𝗥 𝗬𝗔𝗡𝗚 𝗨𝗗𝗔𝗛 𝗧𝗘𝗥𝗦𝗘𝗗𝗜𝗔 𝗗𝗜𝗔𝗡𝗧𝗔𝗥𝗔𝗡𝗬𝗔 :
➪𝙱𝙸𝚂𝙰 𝙱𝚄𝙰𝚃 𝚂𝚃𝙸𝙺𝙴𝚁
➪𝙱𝙸𝚂𝙰 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝚅𝙸𝙳𝙴𝙾 𝚃𝚃 
➪𝙱𝙸𝚂𝙰 𝙿𝙻𝙰𝚈 𝚂𝙾𝚄𝙽𝙳 𝚈𝙰𝙽𝙶 𝙰𝙳𝙰 𝙳𝙸 𝚈𝚃
➪𝙱𝙸𝚂𝙰 𝙱𝙴𝚁𝙼𝙰𝙸𝙽 𝙶𝙰𝙼𝙴 𝚈𝙰𝙽𝙶 𝚂𝚄𝙳𝙰𝙷 𝚃𝙴𝚁𝚂𝙴𝙳𝙸𝙰
➪𝙳𝙰𝙽 𝙼𝙰𝚂𝙸𝙷 𝙱𝙰𝙽𝚈𝙰𝙺 𝙻𝙰𝙶𝙸

𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚈𝙾𝚄㋛︎` ,m)
  }
  return true
}

module.exports = handler