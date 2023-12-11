const axios = require("axios")

let handler = async (m, { conn, usedPrefix, command, args }) => {
    let lang, text;
  if (args.length >= 2) {
    lang = args[0]
    text = args.slice(1).join(' ');
  } else if (m.quoted && m.quoted.text) {
    lang = args[0]
    text = m.quoted.text;
  } else {
    throw `• *Use format:* ${usedPrefix + command} <language> <text>\n• *Example:* ${usedPrefix + command} id good night`;
  }

	await conn.sendPresenceUpdate("recording", m.chat);
	const { data: _data } = await axios
		.request({
			baseURL: "https://api.itsrose.life",
			url: "/tools/translate",
			params: {
				text,
				source_lang: "auto",
				target_lang: lang, 
				apikey: global.rose,
			},
		})
		.catch((e) => e?.response);
	const { status: _status, result: _result } = _data;
	if (!_status) {
		return m.reply("input the target language");
	}
	const _text = _result["translations"][0];
	const { data, status } = await axios
		.request({
			baseURL: "https://api.itsrose.life",
			url: "/voicevox/synthesis",
			method: "POST",
			params: {
				apikey: global.rose,
			},
			data: { speaker: 3, text: _text },
			responseType: "arraybuffer",
		})
		.catch((e) => e?.response);
	if (status !== 200) {
		return m.reply("Synthesis failed");
	}
	// find your way to send audio !muted
	await conn.sendFile(m.chat, data, "", "", m);
	/*
	await conn.sendMessage(m.chat, {
		audio: Buffer.from(data),
		ppt: true,
		//mimetype: "audio/wav"
	}, { quoted: m } )
	*/
};
handler.command = handler.help = ['speak', 'voicevox']
handler.tags = ['tools']
handler.limit = true

module.exports = handler