const axios = require('axios');

let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      return m.reply('Example: .emailtemp example@email.com');
    }

    let email = encodeURIComponent(text);
    let messagesUrl = `https://api.itsrose.site/tools/tempMail/messages?email=${email}&apikey=${global.rose}`;
    let messagesResponse = await axios.get(messagesUrl);
    let messages = messagesResponse.data.mails;

    if (messages.length > 0) {
      let message = '';
      for (let i = 0; i < messages.length; i++) {
        message += `From: ${messages[i].from}\nSubject: ${messages[i].subject}\n\n${messages[i].body_text}\n\n`;
      }
      m.reply(message);
    } else {
      m.reply('🐱 No messages found for this email address.');
    }
  } catch (error) {
    console.log(error);
    m.reply('🐱 An error occurred while retrieving messages.');
  }
};

handler.help = ['emailtemp'];
handler.tags = ['tools'];
handler.command = /^emailtemp$/i;

module.exports = handler;