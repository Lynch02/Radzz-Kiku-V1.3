const { createHash } = require('crypto');

let handler = async function(m, { text, usedPrefix }) {
  await conn.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
  let user = global.db.data.users[m.sender];
  if (!user.email) throw `You have not registered using email\nPlease register first using the command *${usedPrefix}reg <email>*"`;
  if (user.registered === true) throw `You are already registered\nWant to register again? ${usedPrefix}unreg 90259a21exxxxxx`;
  if (!text) throw `Incorrect format\n*${usedPrefix}vercode <verification code>*`;
  let verificationCode = parseInt(text.trim());
  if (user.verificationCode !== verificationCode) throw 'Invalid verification code';
  if (+new Date() > user.verificationExp) throw 'Verification code has expired.*';
  let email = user.email;
  let name = await conn.getName(m.sender);
  let sn = createHash('md5').update(m.sender).digest('hex');
  let balanceBonus = getRandomInt(10000, 100000);
  let limitBonus = getRandomInt(1000, 20000);
  let expBonus = getRandomInt(100000, 100000);
  let age = getRandomInt(18, 30);
  user.balance = balanceBonus;
  user.limit = limitBonus;
  user.exp = expBonus;
  user.sn = sn;
  user.name = name;
  user.age = age;
  user.registered = true;
  global.db.data.users[m.sender] = user;

  let registerInfo = `Register Successful!

╭─「 Info 」
│ Name: ${name}
│ Umur: ${user.age}
│ Balance: +${balanceBonus}
│ Limit: +${limitBonus}
│ Exp: +${expBonus}
│ SN: ${sn}
╰────`;

  conn.reply(m.sender, registerInfo, m, {
      contextInfo: {
        externalAdReply: {
          title: "Register Successfull!",
          body: `Selamat Kak ${name} Register Successfull`,
          thumbnailUrl: 'https://telegra.ph/file/29ee22b2ac524a1c3d658.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
};

handler.help = ['vercode'];
handler.tags = ['start'];
handler.command = /^vercode$/i;

module.exports = handler;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}