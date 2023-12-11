exports.run = {
   usage: ['sewabot'],
   use: 'sewabot',
   category: 'owner',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      let intro = `*Sewa Bot 𝓡𝓪𝓭𝔃𝔃 - Multi device*

*𝖦𝗋𝗈𝗎𝗉 𝖠𝗌𝗌𝗂𝗌𝗍𝖺𝗇𝗍:*
┌  ◦ 𝖠𝖼𝖼𝖾𝗌𝗌 𝖠𝗇𝗍𝗂𝗅𝗂𝗇𝗄
│  ◦ 𝖠𝖼𝖼𝖾𝗌𝗌 𝖦𝖺𝗆𝖾 𝖱𝗉𝗀
│  ◦ 𝖦𝖾𝗍 𝖺 𝖳𝖾𝗑𝗍 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 
│  ◦ 𝖠𝗇𝖽 𝖬𝖺𝗇𝗒𝗆𝗈𝗋𝖾
└  ◦ 𝖨𝖣𝖱 20.000 / 𝖦𝗋𝗈𝗎𝗉 permanent

*𝖯𝗋𝖾𝗆𝗂𝗎𝗆 𝖴𝗌𝖾𝗋:*
┌  ◦ 𝖠𝖼𝖼𝖾𝗌𝗌 𝖬𝖾𝗇𝗎 𝖯𝗋𝖾𝗆𝗂𝗎𝗆
│  ◦ 𝖦𝖾𝗍 𝖴𝗇𝗅𝗂𝗆𝗂𝗍𝖾𝖽 𝖫𝗂𝗆𝗂𝗍
│  ◦ 𝖦𝖾𝗍 𝟣𝟢𝟢𝗄 𝖬𝗈𝗇𝖾𝗒 𝖱𝗉𝗀 / 𝖣𝖺𝗒
│  ◦ 𝖠𝗇𝖽 𝖬𝖺𝗇𝗒𝗆𝗈𝗋𝖾
└  ◦ 𝖨𝖣𝖱 7.000 / Perminggu

• Untuk Info lebih lengkap silahkan
• Chat owner : wa.me/6281563245618`
client.reply(m.chat, intro, m, {
      contextInfo: {
        externalAdReply: {
          title: "𝙳𝙴𝚅𝙸𝙽𝙰 𝚆𝙰𝙱𝙾𝚃 𝙼𝙳",
          body: "Kalo Minat Langsung Klik Gambar Di Atas>_<",
          thumbnailUrl: 'https://telegra.ph/file/e5a7e443689619e2c48c0.jpg',
          sourceUrl: `https://wa.me/6281563245618?text=Kak+Mau+Sewa+Botnya`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }); 
   },
   owner: true,
   cache: true,
   location: __filename
}