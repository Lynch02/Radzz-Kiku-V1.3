let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
conn.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 35000 * 1000,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: `*This bot was created by me with the purpose of learning and having fun and not intending to harm others.*

*𝙢𝙖𝙪 𝙗𝙚𝙡𝙞 𝙨𝙘? 𝙩𝙤𝙡𝙤𝙣𝙜 𝙘𝙝𝙖𝙩 𝙤𝙬𝙣𝙚𝙧*
@${creator.split("@")[0]}

© 𝓡𝓪𝓭𝔃𝔃☂︎`,
          contextInfo: {
            mentionedJid: [creator],
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
handler.register = false

module.exports = handler

