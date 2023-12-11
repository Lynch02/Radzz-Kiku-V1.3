let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let dann = '6281563245618@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `*Mau sewa bot? / Premium?*
_Untuk Harganya_
Silahkan lihat Deskripsi Grup ini!!
https://chat.whatsapp.com/HHZHgmBviNMCOz03RSjaZb

*Apa Keuntungan Sewa bot?*
Bot Masuk Ke Grup Kamu ✓
Bisa main game ✓
Ada Anti Link ✓
Add / Kick Pakai Bot ✓
Dan Masih Banyak Lagi

*Apa Keuntungan Premium?*
Limit Unlimited ✓
Akses Semua Fitur ✓
Unlock Fitur 18+ & Nsfw
Dan Masih Banyak lagi...

*Ada ± 520 Fitur Aktif*`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Harga Sesuai',
  products:[{productId:'7383725344977549'}]}],
  headerImage: { productId: '7383725344977549',
  jpegThumbnail: baper },
  businessOwnerJid: `6281563245618@s.whatsapp.net`
  },
  footerText: 'JIKA MAU ORDER SILAHKAN CHAT KONTAK DIBAWAH',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, { contextInfo: )

}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|premium|)$/i
handler.private = true

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }