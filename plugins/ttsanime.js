let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
let voice =[
'special_week',
'silence_suzuka',
'tokai_teio',
'maruzensky',
'fuji_kiseki',
'oguri_cap',
'gold_ship',
'vodka',
'daiwa_scarlet',
'taiki_shuttle',
'grass_wonder',
'hishi_amazon',
'mejiro_mcqueen',
'kujou_sara',
'barbara',
'paimon',
'arataki_itto',
'sayu',
'xiangling',
'kamisato_ayaka',
'raiden_shogun',
'yae_miko',
'hu_tao',
'keqing']
let response = args.join(' ').split('|')
  if (!args[0]) return m.reply(`Example: ${usedPrefix}${command} hallo namaku kemii`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(`https://xzn.wtf/api/tts-anime?text=${response[0]}&lang=english&voice=${response[1]}&speed=0.8&symbol=y&apikey=${global.xzn}`)
  let kemii = await res.json()
  conn.sendFile(m.chat, kemii.data.url, `kemii.mp3`, '', m, true);
}
handler.help = ['ttsanime <teks>']
handler.tags = ['tools','anime']
handler.command = /^ttsa|ttsanime$/i
handler.limit = true
handler.premium = false
module.exports = handler

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}