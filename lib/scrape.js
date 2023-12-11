const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require("axios")
const qs = require("qs")


function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "DannXD",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

function rexdl(query) {
    return new Promise((resolve) => {
        axios.get('https://rexdl.com/?s=' + query)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const judul = [];
                const jenis = [];
                const date = [];
                const desc = [];
                const link = [];
                const thumb = [];
                const result = [];
                $('div > div.post-content').each(function (a, b) {
                    judul.push($(b).find('h2.post-title > a').attr('title'))
                    jenis.push($(b).find('p.post-category').text())
                    date.push($(b).find('p.post-date').text())
                    desc.push($(b).find('div.entry.excerpt').text())
                    link.push($(b).find('h2.post-title > a').attr('href'))
                })
                $('div > div.post-thumbnail > a > img').each(function (a, b) {
                    thumb.push($(b).attr('data-src'))
                })

                for (let i = 0; i < judul.length; i++) {
                    result.push({
                        creator: 'DannTeam',
                        judul: judul[i],
                        kategori: jenis[i],
                        upload_date: date[i],
                        deskripsi: desc[i],
                        thumb: thumb[i],
                        link: thumb[i]
                    })
                }
                resolve(result)
            })
    })
}

function nomorhoki(nomor) {
    return new Promise((resolve, reject) => {
        axios({
            headers: {
                type: 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            url: 'https://www.primbon.com/no_hoki_bagua_shuzi.php',
            data: new URLSearchParams(Object.entries({
                nomer: nomor,
                submit: 'Submit!'
            }))
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let fetchText = $('#body').text().trim()
            let result;
            try {
                result = {
                    nomor_hp: fetchText.split('No. HP : ')[1].split('\n')[0],
                    angka_bagua_shuzi: fetchText.split('Angka Bagua Shuzi : ')[1].split('\n')[0],
                    energi_positif: {
                        kekayaan: fetchText.split('Kekayaan = ')[1].split('\n')[0],
                        kesehatan: fetchText.split('Kesehatan = ')[1].split('\n')[0],
                        cinta: fetchText.split('Cinta/Relasi = ')[1].split('\n')[0],
                        kestabilan: fetchText.split('Kestabilan = ')[1].split('\n')[0],
                        persentase: fetchText.split('Kestabilan = ')[1].split('% = ')[1].split('ENERGI NEGATIF')[0]
                    },
                    energi_negatif: {
                        perselisihan: fetchText.split('Perselisihan = ')[1].split('\n')[0],
                        kehilangan: fetchText.split('Kehilangan = ')[1].split('\n')[0],
                        malapetaka: fetchText.split('Malapetaka = ')[1].split('\n')[0],
                        kehancuran: fetchText.split('Kehancuran = ')[1].split('\n')[0],
                        persentase: fetchText.split('Kehancuran = ')[1].split('% = ')[1].split("\n")[0]
                    },
                    notes: fetchText.split('* ')[1].split('Masukan Nomor HP Anda')[0]
                }
                } catch {
                    result = `Nomor "${nomor}" tidak valid`
                }
                resolve(result)
            }).catch(reject)
    })
}

module.exports = {
    joox,
    rexdl,
    nomorhoki
}