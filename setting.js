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
global.bot = '𝐴𝑘𝑎𝑟𝑖 𝐵𝑜𝑡⃪᭪'
global.rev = 'ApiRevita'
global.lolkey = 'Atakbotz'
global.invi = 'APIKEY'
global.dap = 'DAIXSU'
global.keykir = 'Kirbotz123'
global.zen = '5fcb423fc44a'
global.ownmy = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.sessionName = 'manz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.bisa = 'Nih Om 々'
global.sp = '⭔'
global.jasru = '*JASA RUN BOT HEROKU BY MANZ EXECUTED*\n\n➣ _3 Hari = 5k_\n➣ _7Hari = 8k_\n➣ _1 Bulan = 20k_\n\n_Kalo Masih Ragu Bisa Pake Yang 3 Hari Dulu 😅☝️_\n\n*Bisa Di Runkan Dulu Baru TF*\n\n_Note: Kalo Bot Mati Bisa Gua On Kan Lagi_\n\nMinat ?\n\n*Contacts Me:* wa.me/6283846819169\n\n```PAYMENT : DANA (PULSA +5K)```'
global.copy = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.punya = 'Punya'
global.wet = '*「 WAIT DONT SPAM 」*'
global.prem = `*MAAF KK KAMU BELUM PREMIUM SILAKAN BUY PREM DULU*`
global.limit = `*LIMIT KAMU HABIS KK, BISA ORDER PREMIUM UNTUK MENDAPATKAN UNLIMITED LIMIT. ATAU NUNGGU BESOK BUAT REST LIMIT NYA*`
global.man = {
kus: '*「 FITUR KHUSUS OWNER 」*',
dir: '*「 HANYA BISA DI GUNAKAN DI PRIVATE CHAT 」*',
wet: '*「 WAIT DONT SPAM 」*',
bomin: '*「 BOT HARUS JADI ADMIN 」*',
gcwa: '*「 GROUP ONLY JOIN HERE 」: https://chat.whatsapp.com/DSFTbb0giUsH9borzEDGEv*',
ami: '*「 KHUSUS ADMIN GC 」*',
}
global.mess = {
    success: '✓ Success',
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

//cuma pajangan 🗿
global.terr = `Ini Adalah Bot Baileys Multi Device, Dan Gua Juga Masih Pemula 😅 Jadi Wajar Kalo Tampilan Nya Jelek Dan Masih Ada Yang Eror`
global.sn = `Jangan Sange Ama Gambar Ya 🗿`


//menu bot
global.menu = `apa sih`
global.ter = `generate random image`
global.fiz = `𝑩𝒀 𝑭𝑰𝒁𝒁 𝑺𝑻𝑶𝑹𝑬`

//donasi
global.nasi = `╭───⌜ *Donasi 💌* ⌟──❑
│▸ *Mau Donasi Apa Liat Doang Bang ?*
│▸ Eh gua ga punya apk dana/gopay dll :v
│▸ kalo pulsa boleh lah buat beli kuota 🗿
│▸ pulsa: 0895397918020
╰───⌜ *${bot}*⌟─❑`

global.sewa = `➤ *SEWA BOT + JADI OWNER*\n_List Harga Sewa Bot_\n➤ _Sewa Bot 1 Minggu = 5k_\n➤ _Permanent = 10k_\n*Keuntungan:*\n➤ _KAMU BISA PAKE FITUR OWNER_\n➤ _KAMU BISA MASUKIN BOT KE GC SESUKA KAMU_\n`

global.buyprem = `*BUY PREMIUM/SEWA BOT*\n*BUY PREMIUM*\n_List Harga Premium_\n➤ _Premium 7 Hari = 5k_\n➤ Premium 1 Bulan = 8k_\n*Keuntungan:*\n➤ _Limit Kamu Unlimited 😱_`
global.limithabis = `*LIMIT ANADA HARI INI SUDAH HABIS,\nLIMIT AKAN DI RESET SETELAH JAM 24:00 WIB. ATAU BELI PREMIUM DENGAN KETIK BUY PREM*`
//script

global.sc = `╭───⌜ *Script* ⌟──❑
│▸ *Base Ori By Dika Ardnt*
│▸ github: https://www.github.com/DikaArdnt/Hisoka-Morou
│▸ *Recode By Manz Tzy*
│▸ sc: https://www.github.com/ManzTzy1/AkariBot
╰───⌜ *${bot}* ⌟─❑`

global.sdkm = '```Mohon Di Patuhi Peraturan Ini Terma Kasih 🙏```'