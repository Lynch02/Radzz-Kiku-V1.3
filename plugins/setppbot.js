exports.run = {
   usage: ['setppbot'],
   use: 'reply photo',
   category: 'owner',
   async: async (m, {
      client,
      Func,
      Scraper
   }) => {
      try {
     	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if ((/image/g.test(mime) && !/webp/g.test(mime)) || q.message?.imageMessage) {
		try {
			let media = await q.download()
			let { img } = await pepe(media)
			await conn.query({
				tag: 'iq',
				attrs: {
					to: conn.user.jid,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			client.reply(`Sukses mengganti PP Bot`)
		} catch (e) {
			console.log(e)
			client.reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		client.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
   },
   owner: true,
   cache: true,
   location: __filename
}