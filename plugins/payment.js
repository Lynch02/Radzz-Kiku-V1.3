let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/f249a4b652d4e1c3b6578.jpg'
let dann =
`
Kalo udah tf jangan lupa ss bukti tf>_<
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler