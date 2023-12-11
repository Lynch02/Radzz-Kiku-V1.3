let { performance } = require('perf_hooks')

let handler = async (m, { conn }) => {

 let start = `Waiting is being accelerated...`
 let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
 let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]','[██▒▒▒▒▒▒▒▒]'])}`
 let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]','[███▒▒▒▒▒▒▒▒]','[████▒▒▒▒▒▒▒]'])}`
 let boost4 = `${pickRandom(['[██████▒▒▒▒▒▒▒]','[████████▒▒▒▒▒▒]','[████████▒▒▒▒]'])}`
 let boost5 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[████████████▒]','[█▒▒▒▒▒▒▒▒▒]'])}`
 let boost7 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]','[████████████]'])}`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   await m.reply(boost5)
   await m.reply(boost6)
   await m.reply(boost7)
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*Bot succeeded in Accelerate!*\n\n*_Speed: ${speed} Second!*`

     conn.reply(m.chat, finish, m)
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i

handler.rowner = true 


handler.fail = null
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}