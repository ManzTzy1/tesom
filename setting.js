/**
   * Base By Dika Ardnt.
   * Recode Manz Tzy
   * Wa Me https://wa.me/6281327496283
   * Nama session nya manztzy.json
*/

const fs = require('fs')
const chalk = require('chalk')

// Ga usah di ubah" dah free apikey
global.APIs = {
	web: 'https://revita.herokuapp.com',
	free: 'https://api-invibot.herokuapp.com',
	dap: 'https://api.dapuhy.xyz',
	
	zen: 'https://zenzapis.xyz',
	lol: 'https://api.lolhuman.xyz',
}

// Ga usah di ubah" dah free apikey
global.APIKeys = {
	'https://revita.herokuapp.com': 'ApiRevita',
	'https://api-invibot.herokuapp.com': 'APIKEY',
'https://api.dapuhy.xyz': 'Kirbotz123',
'https://zenzapis.xyz': '5fcb423fc44a',	
	'https://api.lolhuman.xyz': 'Atakbotz',
}

// Other
global.ownerNumber = ['6281327496283']
global.repo = ['6285724404318']
global.banUser = []
global.premium = ['6281327496283','6283846819169']
global.owner = ['6281327496283','6283846819169','62895397918020']
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.bot = '๐ด๐๐๐๐ ๐ต๐๐กโชแญช'
global.rev = 'ApiRevita'
global.lolkey = 'Atakbotz'
global.invi = 'APIKEY'
global.dap = 'DAIXSU'
global.keykir = 'Kirbotz123'
global.zen = '5fcb423fc44a'
global.ownmy = '๐ด๐๐๐ ๐ป๐๐'
global.sessionName = 'manz'
global.prefa = ['','!','.','๐ฆ','๐ค','๐ฟ']
global.bisa = 'Nih Om ใ'
global.sp = 'โญ'
global.jasru = '*JASA RUN BOT HEROKU BY MANZ EXECUTED*\n\nโฃ _3 Hari = 5k_\nโฃ _7Hari = 8k_\nโฃ _1 Bulan = 20k_\n\n_Kalo Masih Ragu Bisa Pake Yang 3 Hari Dulu ๐โ๏ธ_\n\n*Bisa Di Runkan Dulu Baru TF*\n\n_Note: Kalo Bot Mati Bisa Gua On Kan Lagi_\n\nMinat ?\n\n*Contacts Me:* wa.me/6283846819169\n\n```PAYMENT : DANA (PULSA +5K)```'
global.copy = '๐ด๐๐๐ ๐ป๐๐'
global.punya = 'Punya'
global.wet = '*ใ WAIT DONT SPAM ใ*'
global.prem = `*MAAF KK KAMU BELUM PREMIUM SILAKAN BUY PREM DULU*`
global.limit = `*LIMIT KAMU HABIS KK, BISA ORDER PREMIUM UNTUK MENDAPATKAN UNLIMITED LIMIT. ATAU NUNGGU BESOK BUAT REST LIMIT NYA*`
global.man = {
kus: '*ใ FITUR KHUSUS OWNER ใ*',
dir: '*ใ HANYA BISA DI GUNAKAN DI PRIVATE CHAT ใ*',
wet: '*ใ WAIT DONT SPAM ใ*',
bomin: '*ใ BOT HARUS JADI ADMIN ใ*',
gcwa: '*ใ GROUP ONLY JOIN HERE ใ: https://chat.whatsapp.com/DSFTbb0giUsH9borzEDGEv*',
ami: '*ใ KHUSUS ADMIN GC ใ*',
}
global.mess = {
    success: 'โ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 20,
}
global.thumb = fs.readFileSync('./lib/man.jpg')
global.visoka = fs.readFileSync('./lib/manz.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

//cuma pajangan ๐ฟ
global.terr = `Ini Adalah Bot Baileys Multi Device, Dan Gua Juga Masih Pemula ๐ Jadi Wajar Kalo Tampilan Nya Jelek Dan Masih Ada Yang Eror`
global.sn = `Jangan Sange Ama Gambar Ya ๐ฟ`


//menu bot
global.menu = `apa sih`
global.ter = `generate random image`
global.fiz = `๐ฉ๐ ๐ญ๐ฐ๐๐ ๐บ๐ป๐ถ๐น๐ฌ`

//donasi
global.nasi = `โญโโโโ *Donasi ๐* โโโโ
โโธ *Mau Donasi Apa Liat Doang Bang ?*
โโธ Eh gua ga punya apk dana/gopay dll :v
โโธ kalo pulsa boleh lah buat beli kuota ๐ฟ
โโธ pulsa: 0895397918020
โฐโโโโ *${bot}*โโโ`

global.sewa = `โค *SEWA BOT + JADI OWNER*\n_List Harga Sewa Bot_\nโค _Sewa Bot 1 Minggu = 5k_\nโค _Permanent = 10k_\n*Keuntungan:*\nโค _KAMU BISA PAKE FITUR OWNER_\nโค _KAMU BISA MASUKIN BOT KE GC SESUKA KAMU_\n`

global.buyprem = `*BUY PREMIUM/SEWA BOT*\n*BUY PREMIUM*\n_List Harga Premium_\nโค _Premium 7 Hari = 5k_\nโค Premium 1 Bulan = 8k_\n*Keuntungan:*\nโค _Limit Kamu Unlimited ๐ฑ_`
global.limithabis = `*LIMIT ANADA HARI INI SUDAH HABIS,\nLIMIT AKAN DI RESET SETELAH JAM 24:00 WIB. ATAU BELI PREMIUM DENGAN KETIK BUY PREM*`
//script

global.sc = `โญโโโโ *Script* โโโโ
โโธ *Base Ori By Dika Ardnt*
โโธ github: https://www.github.com/DikaArdnt/Hisoka-Morou
โโธ *Recode By Manz Tzy*
โโธ sc: https://www.github.com/ManzTzy1/AkariBot
โฐโโโโ *${bot}* โโโ`

global.sdkm = '```Mohon Di Patuhi Peraturan Ini Terma Kasih ๐```'