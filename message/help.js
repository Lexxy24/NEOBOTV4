const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

angka = 0
let HB = '⊳'
let SB = '•'
let SK = '❏'
let K1 = '『'
let K2 = '』'
let YR = '⇒'
let BF = '_'
let P4 = '```'
let GK = '➛'
let DR =`*──────────────────*`
let H4 =`└───⭓`
let monospace = '_'
let stripkiri = '*_'
let stripknan = '_*'
let J1 =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[`
let J4 =`]`
let J3 =`┃╰──────────────────
╚━══━══━══━══━══━══━`
let J2 =`┃│⭓ `
let TT1 =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═➤`
let TT2 =`⌟`
let TT3 =`┃│➢`

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*───•「 ${setting.botName} - MD 」•───*
	
 _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

 ❑ *INFO SERVER*
 ‣ _Library : Baileys-MD._
 ‣ _Prefix : Multi Prefix_
 ‣ _Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
 ‣ _Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_
 
 ❑ *INFO USERS*
 ‣ _Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}_
 ‣ _Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}_
 ‣ _Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}_
 ‣ _Saldo : Rp.${toCommas(getBalance(sender, balance))}_
`
}

exports.menuall = (sender, prefix, pushname) => {
	return `
_*•──•──•──•──•──•──•──•*_
   *NEOBOT WHATSAPP*
  *BAILEYS MULTI DEVICE*
_*•──•──•──•──•──•──•──•*_

${J1} *_MAIN MENU_* ${J4}
${J2}${stripkiri}${prefix}id${stripknan}
${J2}${stripkiri}${prefix}ping
${J2}${stripkiri}${prefix}rules${stripknan}
${J2}${stripkiri}${prefix}script${stripknan}
${J2}${stripkiri}${prefix}menu${stripknan}
${J2}${stripkiri}${prefix}owner${stripknan}
${J2}${stripkiri}${prefix}donasi${stripknan}
${J2}${stripkiri}${prefix}speed${stripknan}
${J2}${stripkiri}${prefix}runtime${stripknan}
${J2}${stripkiri}${prefix}sewabot${stripknan}
${J2}${stripkiri}${prefix}cekprem${stripknan}
${J2}${stripkiri}${prefix}listprem${stripknan}
${J2}${stripkiri}${prefix}botstatus${stripknan}
${J2}${stripkiri}${prefix}statusbot${stripknan}
${J2}${stripkiri}${prefix}speedtest${stripknan}
${J2}${stripkiri}${prefix}buildpack${stripknan}
${J3}
${J1} *_CONVERTER/TOOLS_* ${J4}
${J2}${stripkiri}${prefix}tahta${stripknan}
${J2}${stripkiri}${prefix}ssweb${stripknan}
${J2}${stripkiri}${prefix}toimg${stripknan}
${J2}${stripkiri}${prefix}tovid${stripknan}
${J2}${stripkiri}${prefix}cuttly${stripknan}
${J2}${stripkiri}${prefix}tinyurl${stripknan}
${J2}${stripkiri}${prefix}sticker${stripknan}
${J3}
${J1} *_NULIS MENU_* ${J4}
${J2}${stripkiri}${prefix}nulis${stripknan}
${J2}${stripkiri}${prefix}nuliskiri${stripknan}
${J2}${stripkiri}${prefix}nuliskanan${stripknan}
${J2}${stripkiri}${prefix}foliokiri${stripknan}
${J2}${stripkiri}${prefix}foliokanan${stripknan}
${J3}
${J1} *_DOWNLOADER_* ${J4}
${J2}${stripkiri}${prefix}play${stripknan}
${J2}${stripkiri}${prefix}tiktok${stripknan}
${J2}${stripkiri}${prefix}ytmp4${stripknan}
${J2}${stripkiri}${prefix}ytmp3${stripknan}
${J2}${stripkiri}${prefix}facebook${stripknan}
${J2}${stripkiri}${prefix}mediafire${stripknan}
${J2}${stripkiri}${prefix}instagram${stripknan}
${J2}${stripkiri}${prefix}tiktokaudio${stripknan}
${J2}${stripkiri}${prefix}tiktoknowm${stripknan}
${J3}
${J1} *_STORE MENU_* ${J4}
${J2}${stripkiri}${prefix}kali${stripknan}
${J2}${stripkiri}${prefix}bagi${stripknan}
${J2}${stripkiri}${prefix}kurang${stripknan}
${J2}${stripkiri}${prefix}tambah${stripknan}
${J2}${stripkiri}${prefix}buysc${stripknan}
${J2}${stripkiri}${prefix}topupff${stripknan}
${J2}${stripkiri}${prefix}jasarun${stripknan}
${J2}${stripkiri}${prefix}store${stripknan}
${J2}${stripkiri}${prefix}ceklist${stripknan}
${J2}${stripkiri}${prefix}dellist <key>${stripknan}
${J2}${stripkiri}${prefix}addlist <key@response>${stripknan}
${J2}${stripkiri}${prefix}updatelist <key@response>${stripknan}
${J2}${stripkiri}${prefix}done <reply pesan>${stripknan}
${J2}${stripkiri}${prefix}proses <reply pesan>${stripknan}
${J3}
${J1} *_RANDOM MENU_* ${J4}
${J2}${stripkiri}${prefix}quote${stripknan}
${J2}${stripkiri}${prefix}cecan${stripknan}
${J2}${stripkiri}${prefix}cogan${stripknan}
${J2}${stripkiri}${prefix}anime${stripknan}
${J2}${stripkiri}${prefix}husbu${stripknan}
${J2}${stripkiri}${prefix}neko1${stripknan}
${J2}${stripkiri}${prefix}neko2${stripknan}
${J2}${stripkiri}${prefix}waifu1${stripknan}
${J2}${stripkiri}${prefix}waifu2${stripknan}
${J2}${stripkiri}${prefix}kitsune${stripknan}
${J3}
${J1} *_KERANG AJAIB_* ${J4}
${J2}${stripkiri}${prefix}rate${stripknan}
${J2}${stripkiri}${prefix}apakah${stripknan}
${J2}${stripkiri}${prefix}bisakah${stripknan}
${J2}${stripkiri}${prefix}siapakah${stripknan}
${J2}${stripkiri}${prefix}bagaimanakah${stripknan}
${J3}
${J1} *_SEARCH MENU_* ${J4}
${J2}${stripkiri}${prefix}jam${stripknan}
${J2}${stripkiri}${prefix}lirik${stripknan}
${J2}${stripkiri}${prefix}loker${stripknan}
${J2}${stripkiri}${prefix}meme${stripknan}
${J2}${stripkiri}${prefix}couple${stripknan}
${J2}${stripkiri}${prefix}quotes${stripknan}
${J2}${stripkiri}${prefix}ghstalk${stripknan}
${J2}${stripkiri}${prefix}grupwa${stripknan}
${J2}${stripkiri}${prefix}ytsearch${stripknan}
${J2}${stripkiri}${prefix}darkjoke${stripknan}
${J2}${stripkiri}${prefix}faktaunik${stripknan}
${J2}${stripkiri}${prefix}ppcouple${stripknan}
${J2}${stripkiri}${prefix}kisahnabi${stripknan}
${J2}${stripkiri}${prefix}memeindo${stripknan}
${J2}${stripkiri}${prefix}infogempa${stripknan}
${J2}${stripkiri}${prefix}jadwalbola${stripknan}
${J2}${stripkiri}${prefix}jadwalbioskop${stripknan}
${J3}
${J1} *_GAMES MENU_* ${J4}
${J2}${stripkiri}${prefix}delttc${stripknan}
${J2}${stripkiri}${prefix}tictactoe${stripknan}
${J2}${stripkiri}${prefix}tebakgambar${stripknan}
${J2}${stripkiri}${prefix}tebakgambar${stripknan}
${J2}${stripkiri}${prefix}caklontong${stripknan}
${J2}${stripkiri}${prefix}asahotak${stripknan}
${J2}${stripkiri}${prefix}tebakjenaka${stripknan}
${J3}
${J1} *_PAYMENT/BANK_* ${J4}
${J2}${stripkiri}${prefix}limit${stripknan}
${J2}${stripkiri}${prefix}saldo${stripknan}
${J2}${stripkiri}${prefix}transfer${stripknan}
${J2}${stripkiri}${prefix}buylimit${stripknan}
${J2}${stripkiri}${prefix}buyglimit${stripknan}
${J2}${stripkiri}${prefix}topbalance${stripknan}
${J3}
${J1} *_BALIK KATA_* ${J4}
${J2}${stripkiri}${prefix}hilih${stripknan} <text>
${J2}${stripkiri}${prefix}halah${stripknan} <text>
${J2}${stripkiri}${prefix}huluh${stripknan} <text>
${J2}${stripkiri}${prefix}heleh${stripknan} <text>
${J2}${stripkiri}${prefix}holoh${stripknan} <text>
${J3}
${J1} *_GROUP MENU_* ${J4}
${J2}${stripkiri}${prefix}add${stripknan}
${J2}${stripkiri}${prefix}kick${stripknan}
${J2}${stripkiri}${prefix}demote${stripknan}
${J2}${stripkiri}${prefix}promote${stripknan}
${J2}${stripkiri}${prefix}group${stripknan}
${J2}${stripkiri}${prefix}jadian${stripknan}
${J2}${stripkiri}${prefix}jodohku${stripknan}
${J2}${stripkiri}${prefix}revoke${stripknan}
${J2}${stripkiri}${prefix}hidetag${stripknan}
${J2}${stripkiri}${prefix}setdesc${stripknan}
${J2}${stripkiri}${prefix}linkgrup${stripknan}
${J2}${stripkiri}${prefix}setppgrup${stripknan}
${J2}${stripkiri}${prefix}setnamegc${stripknan}
${J3}
${J1} *_OWNER MENU_* ${J4}
${J2}${stripkiri}${prefix}bc${stripknan}
${J2}${stripkiri}${prefix}join${stripknan}
${J2}${stripkiri}${prefix}exif${stripknan}
${J2}${stripkiri}${prefix}leave${stripknan}
${J2}${stripkiri}${prefix}setting${stripknan}
${J2}${stripkiri}${prefix}delprem${stripknan}
${J2}${stripkiri}${prefix}addprem${stripknan}
${J2}${stripkiri}${prefix}setppbot${stripknan}
${J2}${stripkiri}${prefix}broadcast${stripknan}
${J3}
${J1} *_TEXTPRO MENU_* ${J4}
${J2}${stripkiri}${prefix}snow${stripknan} <text>
${J2}${stripkiri}${prefix}blood${stripknan} <text>
${J2}${stripkiri}${prefix}cloud${stripknan} <text>
${J2}${stripkiri}${prefix}berry${stripknan} <text>
${J2}${stripkiri}${prefix}candy${stripknan} <text>
${J2}${stripkiri}${prefix}circuit${stripknan} <text>
${J2}${stripkiri}${prefix}pencil${stripknan} <text>
${J2}${stripkiri}${prefix}glitch${stripknan} <text>
${J2}${stripkiri}${prefix}matrix${stripknan} <text>
${J2}${stripkiri}${prefix}metalic${stripknan} <text>
${J2}${stripkiri}${prefix}deepsea${stripknan} <text>
${J2}${stripkiri}${prefix}darkgold${stripknan} <text>
${J2}${stripkiri}${prefix}papercut${stripknan} <text>
${J2}${stripkiri}${prefix}discovery${stripknan} <text>
${J2}${stripkiri}${prefix}christmas${stripknan} <text>
${J2}${stripkiri}${prefix}transformer${stripknan} <text>
${J3}
${TT1} *THANKS TO*
${TT3} ${stripkiri}irfann${stripknan}
${TT3} ${stripkiri}Ra-api${stripknan}
${TT3} ${stripkiri}Dt4-api${stripknan}
${TT3} ${stripkiri}Hxz-api${stripknan}
${TT3} ${stripkiri}Xfarr-api${stripknan}
${TT3} ${stripkiri}Leyscoders${stripknan}
${TT3} ${stripkiri}Lexxy Official${stripknan}
${TT3} ${stripkiri}Penyedia Modules${stripknan}
${J3}

`+'\`\`\`® Simple Bot Whatsapp\`\`\`'
}

exports.rulesnya = (sender, prefix) => {
   return `
   ≻ *RULES BOT*
   
1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini di jual oleh Lexxy Official Jika Minat Chat Wa.me/6283834558105

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add group.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Neobot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Neobot
😖🙏`
}

exports.sewabot = (sender, prefix) => {
   return `
☞ *LIST HARGA SEWABOT*
 ➢ _2 Hari : Rp3.000_
 ➢ _5 Hari : Rp5.000_
 ➢ _1 Minggu : Rp7.000_
 ➢ _2 Minggu : Rp12.000_
 ➢ _1 Bulan : Rp15.000_
 ➢ _2 Bulan : Rp25.000_
 ➢ _3 Bulan : Rp45.000_

_Hai Kak Mau Sewa Bot ??_
_Untuk Fiturnya Bisa Di Cek #allmenu_
_Jika Minat Chat Owner Ketik #owner_

*───•「 ${setting.botName} - MD 」•───*
`
}

exports.donasibot = (sender, prefix) => {
   return `
  ‣ *DONASI BOT*
 ➢ DANA = 08xxxxxxx
 ➢ OVO = 08xxxxxxx
 ➢ PULSA = 08xxxxxxx
 ➢ GOPAY = 08xxxxxxx
 
Hallo Kak ${ucapanWaktu}
Beneran Mau Donasi Bot ??
Silahkan Pilih Payment Di Atas

Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini
`
}