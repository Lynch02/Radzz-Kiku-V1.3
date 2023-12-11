let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
// FAKE KONTAK
 const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${author}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${namebot}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
 
if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION: 𝚓𝚊𝚗𝚐𝚊𝚗 𝚍𝚒 𝚜𝚙𝚊𝚖 𝚢𝚊>_<\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: repPy })
await conn.reply(m.chat, `𝙞𝙩𝙪 𝙤𝙬𝙣𝙚𝙧 𝙖𝙠𝙪 𝙮𝙖 𝙟𝙖𝙣𝙜𝙖𝙣 𝙙𝙞 𝙨𝙥𝙖𝙢 𝙘𝙝𝙖𝙩 𝙖𝙩𝙖𝙪 𝙙𝙞 𝙩𝙚𝙡𝙚𝙛𝙤𝙣シ︎`,m)
  }
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler