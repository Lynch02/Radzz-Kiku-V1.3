let handler = async (m, { conn }) => {
    let thumb = 'https://telegra.ph/file/475dd5bbdce4b6d9363eb.jpg'
    let caption = ` *Senin* \n Microcontroler 13.00 - 14.40,\n\n *Selasa*\n Keamanan Jaringan 08.00 - 09.40\n Prak.Kejar 09.40 - 11.20 \n\n *Rabu*\n Visual Programer 08.00 - 09.40\n K3 & Hukenaker 10.00 - 11.40\n\n *Kamis* \n Statistik 10.00 - 11.40 \n Etika Profesi 12.00 - 13.40 \n\n *Sabtu*\n Adm. Sistem 13.00 - 14.40\n Prak. Adm 14.40 - 16.20`
    
    await conn.sendFile(m.chat, thumb, 'shalat.jpg', `${caption}`, m)
    
           }
           
    handler.customPrefix = /^(jadwalc|jadwalkuliah|jakul)/i
    handler.command = new RegExp
    module.exports = handler