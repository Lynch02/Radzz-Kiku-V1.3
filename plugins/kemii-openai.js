const axios = require("axios");

const handler = async (m, { text }) => {
  if (!text) {
    return m.reply("Masukan query");
  }

  m.reply("*Tunggu sebentar...*")

  try {
    const apiUrl = `https://api.azz.biz.id/api/alicia?q=${encodeURIComponent(
      m.quoted && m.quoted.text
        ? `AI : "${m.quoted.text}"\n\nUser : ${text}`
        : `User : ${text}`
    )}&user=${m.sender}&key=alok`;

    const response = await axios.get(apiUrl);
    const responseData = response.data.respon;

await conn.sendMessage(m.chat,{text:responseData},{quoted:m});
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    m.reply("Terjadi kesalahan saat mengakses API.");
  }
};

handler.help = handler.command = ["ai", "chatgpt", "gpt", "alicia"];
handler.tags = ['internet'];
handler.premium = false;

module.exports = handler;