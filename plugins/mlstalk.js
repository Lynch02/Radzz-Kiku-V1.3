const axios = require('axios');

let handler = async (m, { conn, args, usedPrefix, command }) => {
 let response = args.join(' ').split('|')
 if (!args[0]) throw `Input ID and ZoneID!\nExample: ${usedPrefix + command} 1827122x|1928x`
 let result = await mlstalk(response[0], response[1])
 let hasil = `${htki} ML Stalker ${htka}\n\nUsername: ${result.userName}\nID: ${response[0]}\nZoneID: ${response[1]}`
 m.reply(hasil)
}

handler.help = ['mlstalk']
handler.tags = ['tools']
handler.command = /^(mlstalk)$/i
handler.limit = true

module.exports = handler

async function mlstalk(id, zoneId) {
  try {
    const response = await axios.post(
      'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
      new URLSearchParams(
        Object.entries({
          productId: '1',
          itemId: '2',
          catalogId: '57',
          paymentId: '352',
          gameId: id,
          zoneId: zoneId,
          product_ref: 'REG',
          product_ref_denom: 'AE',
        })
      ),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Referer: 'https://www.duniagames.co.id/',
          Accept: 'application/json',
        },
      }
    );
    return response.data.data.gameDetail;
  } catch (error) {
    throw error;
  }
}

// Contoh pemanggilan function
mlstalk('gameId', 'zoneId')
  .then((gameDetail) => {
    console.log(gameDetail);
  })
  .catch((error) => {
    console.error(error);
  });