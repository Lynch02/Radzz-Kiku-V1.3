let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw 'link githubnya mana? contoh: https://github.com/Valdimir-Kemii/Kikuchanj'
    conn.sendMessage(m.chat, { react: { text: '����', key: m.key }})

    if (!regex.test(args[0])) throw 'link salah!'
    try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filename=Kangsad01/bot-mdv1.21.4.2022-g836cccd.zip'
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    conn.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
   } catch (e) {
    console.log(e);
    m.reply(`Maaf kak, repository yang Anda cari tidak dapat ditemukan.`);
  }

}
handler.help = ['gitclone <url>']
handler.tags = ['tools', 'downloader']
handler.command = /gitclone/i

handler.limit = true

module.exports = handler