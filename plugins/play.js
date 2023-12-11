let fetch = require('node-fetch')
let ytdl = require("ytdl-core")
let yts = require("yt-search")

const handler = async (m, { conn, command, text, args, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/Radzzoffc/MakeMeow-Storage@main/avatar_contact.png");
let pp = await (await fetch(ppUrl)).buffer();
let user = global.db.data.users[who];
  if (!text) throw `Gunakan contoh *${usedPrefix + command}* naruto blue bird`;
  conn.youtubePlay = conn.youtubePlay ? conn.youtubePlay : {};
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const result = await searchAndDownloadMusic(text);
  const infoText = `
🎞️ *Title:* ${title ? title : 'not know'}
⏳ *Duration:* ${timestamp ? timestamp : 'not know'}
👀 *Views:* ${formatNumber(views) ? formatNumber(views) : 'not know'}
📅 *Upload:* ${ago ? ago : 'not know'}
🔗 *Link:* ${url}

*_mengirim audio mohon tunggu．．．_*
  `;

  const orderedLinks = result.allLinks.map((link, index) => {
    const sectionNumber = index + 1;
    const { quality, type, size } = link;
    return `*${sectionNumber}.* ${type} *${quality}* - ${size}`;
  });
  const orderedLinksText = orderedLinks.join("\n");
  const fullText = `${infoText}\n\n${orderedLinksText}`;
  const { key } = await conn.reply(m.chat, fullText, m, {
      contextInfo: {
        externalAdReply: {
          title: `${result.title}`,
          thumbnailUrl: `${ppUrl}`,
          mediaUrl: `${result.videoUrl}`,
          mediaType: 2,
          renderLargerThumbnail: true
        }
      }
    });
  conn.youtubePlay[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, { delete: key });
      delete conn.youtubePlay[m.sender];
    }, 60 * 1000),
  };
};

handler.before = async (m, { conn }) => {
  conn.youtubePlay = conn.youtubePlay ? conn.youtubePlay : {};
  if (m.isBaileys || !(m.sender in conn.youtubePlay)) return;
  const { result, key, timeout } = conn.youtubePlay[m.sender];
  if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
  const choice = m.text.trim();
  const inputNumber = Number(choice);
  if (inputNumber >= 1 && inputNumber <= result.allLinks.length) {
    const selectedUrl = result.allLinks[inputNumber - 1].url;
    const buffer = await fetchVideoBuffer(decodeURI(selectedUrl));
    m.reply(buffer)
    m.reply(`Anda memilih pilihan nomor *${inputNumber}*\n*Klik Dan Download:* ${await shortUrl(selectedUrl)}`);
    conn.sendMessage(m.chat, { delete: key });
    clearTimeout(timeout);
    delete conn.youtubePlay[m.sender];
  } else {
    m.reply("Nomor urutan tidak valid. Silakan pilih nomor yang sesuai dengan daftar di atas.\nAntara 1 sampai " + result.allLinks.length);
  }
};

handler.help = ["play"];
handler.tags = ["downloader"];
handler.command = /^(play)$/i;
handler.limit = true;
module.exports = handler

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

async function searchAndDownloadMusic(query) {
  try {
    const { videos } = await yts(query);
    if (!videos.length) return "Maaf, tidak ditemukan hasil video untuk pencarian ini.";
    const video = videos[0];
    const videoInfo = await ytdl.getInfo(video.url);
    const formats = videoInfo.formats;
    const allLinks = formats.map(format => ({
      type: format.hasVideo && format.hasAudio ? "Video & Audio" : (format.hasVideo ? "Video" : "Audio"),
      quality: format.qualityLabel || format.audioQuality || "N/A",
      url: format.url,
      size: format.contentLength ? formatBytes(format.contentLength) : "N/A"
    }));

    const jsonData = {
      title: video.title,
      description: video.description,
      duration: video.duration,
      author: video.author.name,
      allLinks: allLinks,
      videoUrl: video.url,
      thumbnail: video.thumbnail,
    };

    return jsonData;
  } catch (error) {
    return "Terjadi kesalahan: " + error.message;
  }
}

async function shortUrl(url) {
  let res = await fetch(`https://youtube.com/api-create.php?url=${url}`);
  return await res.text();
}

async function fetchVideoBuffer() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    return await response.arrayBuffer();
  } catch (error) {
    return null;
  }
}