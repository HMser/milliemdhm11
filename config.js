global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bochil = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')

global.owner = ["972522826442","972522826442","972522826442","972522826442","972522826442"] // Change owner number => src/premium.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users

global.devx = 'false'

global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'yourkey',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api.zeks.me': 'apivinz'
}



global.author = `💋 ᴍɪʟʟɪᴇ 💋`
global.wm = `ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ʜᴍ`
global.ucpn = ''
global.linkgc = 'https://chat.whatsapp.com/HZ4c5yrsd0g8OfELZGySFZ'
global.linkig = 'https://rebrand.ly/hmser'
global.linkyt = 'https://rebrand.ly/hmser'
global.linkfb = 'https://rebrand.ly/hmser'
global.git = 'https://rebrand.ly/hmser'
global.web1 = 'https://rebrand.ly/hmser'
global.url = 'https://rebrand.ly/hmser'


global.packname = `ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ʜᴍ`
global.name = 'ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ʜᴍ'
global.deslink = ''
global.titlink = 'ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ʜᴍ'
global.bodlink = 'ʏᴏᴜ ᴄᴀɴ ᴍᴀᴋᴇ ᴍᴇ ʜᴀᴘᴘʏ😊'
global.wait = '_Ippo varum😊_'
global.eror = '_Ippo kittunnilla, kurach kazhinj vaa_'
global.dtu = 'BOT HELP GROUP'



//======== Fake Size ========//
global.fsx = 555  //fake size foto/video
global.fsdx = 555  //fake size document 
global.pcdx = 999999999999  // fake page count document

global.version = '^0.0.1'

global.multiplier = 69 // The higher, The harder levelup
global.nolink = 'No URL Found'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
