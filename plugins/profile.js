let fetch = require("node-fetch");

let handler = async (m, { conn, command }) => {
  try {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    else who = m.quoted.sender ? m.quoted.sender : m.sender;

    let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[who];
    let username = user.name;
    let limit = user.premium ? '∞' : user.limit; // Mengubah limit user premium menjadi 'Infinity' jika pengguna adalah premium
    let balance = user.money > 9999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money; // Mengubah balance user yang lebih dari 999999999 menjadi 'Infinity'
    let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level; // Mengubah level pengguna yang lebih dari 9999 menjadi 'Infinity'
    let role = user.role;
    let rank = user.owner ? 'Immortality' : user.premium ? 'Sepuh' : 'Kroco'; // Menambahkan 'Not Found' jika rank tidak terdefinisi
    let exp = user.exp > 999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
    let age = user.age > 4000 ? 'Unknown' : user.age;
    let isPremium = user.premium ? "Yes" : "Free User";
    let isVip = user.vip ? "Yes" : "Free User";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
    let vipExpired = user.vip ? new Date(user.vipDate).toDateString() : "Not Found";
    let pasangan = user.pasangan ? global.db.data.users[user.pasangan].name : 'Not Have'; // Mengambil nama pasangan dari database
    let banned = user.banned ? true : false;
    let sahabat = user.sahabat ? '' + global.db.data.users[user.sahabat].name : 'Not Have';

    let caption = `
「 *U S E R - P R O F I L E* 」

  × *Name* : ${username}
  × *Age* : ${age}
  × *Role* : ${role}
  × *Rank* : ${rank}
  × *Level* : ${level}
  × *Balance* : ${balance}
  × *Exp* : ${exp}
  × *Limit* : ${limit}

「 *U S E R - S T A T U S* 」

  × *Banned* : ${banned ? 'Yes' : 'No'}
  × *Pasangan*: ${pasangan.split`@`[0]}
  × *Sahabat* : ${sahabat}
  × *Premium* : ${isPremium}
  × *PremExpired* : ${premiumExpired}
   𝙳𝙴𝚅𝙸𝙽𝙰 𝙼𝙳 - Radzz
       
    `.trim();
    
    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: `M y - P r o f i l e`,
          thumbnailUrl: ppUrl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch {
    let sender = m.sender;
    let ppUrl = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[sender];
    let username = user.name;
    let limit = user.premium ? '∞' : user.limit; // Mengubah limit user premium menjadi 'Infinity' jika pengguna adalah premium
    let balance = user.money > 9999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money; // Mengubah balance user yang lebih dari 999999999 menjadi 'Infinity'
    let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level; // Mengubah level pengguna yang lebih dari 9999 menjadi 'Infinity'
    let role = user.role;
    let rank = user.owner ? 'Immortality' : user.premium ? 'Sepuh' : 'Kroco'; // Menambahkan 'Not Found' jika rank tidak terdefinisi
    let exp = user.exp > 999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
    let age = user.age > 4000 ? 'Unknown' : user.age;
    let isPremium = user.premium ? "Yes" : "Free User";
    let isVip = user.vip ? "Yes" : "Free User";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
    let vipExpired = user.vip ? new Date(user.vipDate).toDateString() : "Not Found";
    let pasangan = user.pasangan ? global.db.data.users[user.pasangan].name : 'Not Have'; // Mengambil nama pasangan dari database
    let banned = user.banned ? true : false;
    let sahabat = user.sahabat ? '' + global.db.data.users[user.sahabat].name : 'Not Have';

    let caption = `
「 *U S E R - P R O F I L E* 」

  × *Name* : ${username}
  × *Age* : ${age}
  × *Role* : ${role}
  × *Rank* : ${rank}
  × *Level* : ${level}
  × *Balance* : ${balance}
  × *Exp* : ${exp}
  × *Limit* : ${limit}

「 *U S E R - S T A T U S* 」

  × *Banned* : ${banned ? 'Yes' : 'No'}
  × *Pasangan*: ${pasangan.split`@`[0]}
  × *Sahabat* : ${sahabat}
  × *Premium* : ${isPremium}
  × *PremExpired* : ${premiumExpired}

   𝙳𝙴𝚅𝙸𝙽𝙰 𝙼𝙳 - Radzz
       
    `.trim();

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: `M y - P r o f i l e`,
          thumbnailUrl: ppUrl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  }
};

handler.command = /^(profile|me)$/i
handler.help = ['profile *@user*'];
handler.tags = ['start'];
handler.register = true;

module.exports = handler;