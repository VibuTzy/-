const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatkey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const crypto = require('crypto') 
const yts = require( 'yt-search')
const request = require('request')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')
const imageToBase64 = require('image-to-base64')
const { exec, spawn, execSync } = require('child_process')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { y2mate } = require('./lib/y2mate');
const { wikiSearch } = require('./lib/wiki.js')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
gambar = fs.readFileSync('./media/logo.jpg')
tamnel = fs.readFileSync('./media/logotoko.jpg')
td = fs.readFileSync('./media/TD.jpg')
const { ind } = require('./pebz')
const { kodenime } = require('./lib/kodenime.js')
const { nuklir } = require('./lib/nuklir.js')
const { Miminnya, BotName, fake, ownerNumber, targetpc, lolkey, Gopay, Dana, Pulsa} = require('./setting.json')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
//===============================================================================//

isSelf = false
isPublic = false
a = '```'
HardiApi = 'hardianto'
limitawal = '10'
memberlimit = 2

//===============================================================================//
         const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const checkATMuser2 = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
                
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
           
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight🏙'
}
  
//================================================================================//
           
            module.exports = pebz = async (pebz, mek, _welkom) => {
	        try {
	     //   const { id } = message
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked		
		    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
	        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '.'          	
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = pebz.user.jid
		    const botNumberss = pebz.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? mek.participant : mek.key.remoteJid
	     	const totalchat = await pebz.chats.all()
		    const groupMetadata = isGroup ? await pebz.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
	    	const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`, `6285849261085@s.whatsapp.net`]
	     	const isOwner = OwnerNumber.includes(sender)
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? _welkom.includes(from) : false
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : false		    
            const conts = mek.key.fromMe ? pebz.user.jid : pebz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? pebz.user.name : conts.notify || conts.vname || conts.name || '-'
            
//================================================================================//
           
		mess = {
			wait: 'Please Waiting. . .',
			success: 'Successl!',
			wrongFormat: 'Wrong Format!! Please Read Menu!',
			error: {
				stick: 'This is not sticker',
				url: 'Url EROR',
			},
			only: {
				group: 'Only Group!!',
				owner: 'Onlt owner Bot!!',
				gcadmin: 'Only Group Admins',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))        }
        const reply = (teks) => {
            pebz.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            pebz.sendMessage(hehe, teks, text)
        }
        const sendVn = (teks) => {pebz.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? pebz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : pebz.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }            
              	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return pebz.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            pebz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        pebz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    pebz.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 250
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
                   //function cek duit
            if (isRegistered ) {
            const checkATM2 = checkATMuser2(sender)
            try {
                if (checkATM2 === undefined) addATM(sender)
                const uangsaku2 = Math.floor(Math.random() * 0) + 0
                addKoinUser(sender, uangsaku2)
            } catch (err) {
                console.error(err)
            }
        }
            
//================================================================================//
           
        const fakestatus = (teks) => {
        pebz.sendMessage(from, teks, text, {
        quoted: {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
        },
        message: {
        "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": fake,
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediakey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediakeyTimestamp": "1610993486",
        "jpegThumbnail": gambar,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
        }
        }
        })
        }
        pebz.chatRead(from, "read")

//===============================================================================//
 //+++ || FAKE KONTAK           
           const fkontak = { 
           key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Hallo ${pushname}\n${ucapanWaktu}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': gambar}}} 
 //+++ || FAKE TROLI         
           const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: gambar, surface: 200, message: `➥ Made By ${Miminnya}\n➥ Hallo ${pushname}`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }                	

//=================================================//	
 
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        pebz.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: troli
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        pebz.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await pebz.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        pebz.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: troli,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return pebz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }          
        
//===============================================================================//
        const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                text = normalizeMention(from, text, mids)
                } 
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
                };
                download(url, filename, async function () {
                console.log('done');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0]+"Message"
                if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
                }
                if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
                }
                pebz.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
                    fs.unlinkSync(filename)
                });
                } 
         const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    pebz.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }                                 
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
         };
        download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        pebz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendFile = async (medya, namefile, capti, tag, vn) => {
        baper = await getBuffer(medya)
        mimi = ''
        if (namefile.includes('m4a')){
        pebz.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
        }
        if (namefile.includes('mp4')){
        pebz.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('gif')){
        pebz.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
        } 
        if (namefile.includes('png')){
        pebz.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
        }
        if (namefile.includes('webp')){
        pebz.sendMessage(from, baper, sticker, {quoted: tag})
        } else {
        kobe = namefile.split(`.`)[1]
        pebz.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
        }
        }
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        pebz.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        pebz.sendMessage(from, hasil, type, options).catch(e => {
        pebz.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
       })
     })
   })
 })
}
//================================================================================//

	  colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	  const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
       
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))  
      if (!mek.key.fromMe && isSelf === true) return
      
//================================================================================/
//============================ A L L  C A S E  M E N U ==============================
//================================================================================/
switch (command) {  
//===== S e l e c t i o n  m e n u
      case 'menu': case 'help':
      	    if (!isRegistered) return reply(ind.noregis(prefix, pushname))
            listMsg = {
            buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
            footerText: fake,
            description: `Hai @${sender.split('@')[0]}, Select This Menu!`,
            sections: [
            {
            "title": `${wita} - ${ucapanWaktu} kak - Best Today`,
            rows: [
            {
              "title": "CATALOG MENU",
              "rowId": `${prefix}menucatalog`
            },
           /* {
              "title": "BUTTON MENU",
              "rowId": `${prefix}buttonmenu`
            },*/
            {
              "title": "MEDIA MENU",
              "rowId": `${prefix}audiomenu`
            },
            {
              "title": "DONATE BOT",
              "rowId": `donasi${prefix}`
            }
            ]
            }],
            listType: 1
            }
            pebz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
            break
//====== C a t a l o g  m e n u
      case 'verify':  case 'daftar':              
            if (isRegistered) return reply('Akun kamu sudah terverfikasi')
            if (!q.includes('|')) return  reply(ind.wrongf())
            const namaUser = q.substring(0, q.indexOf('|') - 0)
            const umurUser = q.substring(q.lastIndexOf('|') + 1)
            const serialUser = createSerial(18)
            const duitt = checkATMuser(sender)
            if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
            if (namaUser.length >= 30) return reply(`why your name so long it's a name or a train`)
            if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
            if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
	        try {
		    ppimg = await pebz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
	    	ppimg = 'https://www.linkpicture.com/q/20211125_113714.jpg'	
		    }
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
	        const anuu = `「 *𝗣𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥𝗔𝗡 𝗨𝗦𝗘𝗥* 」	         
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot*\n\n「 *PROFILE* 」\n*🐼Nama :* ${namaUser}\n*🐼Umur :* ${umurUser}\n*🐼Nomor :* +${sender.split('@')[0]}\n*🐼Serial :* ${serialUser}\n*🐼︎Total :* ${_registered.length} 𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮\n\n「 INFO 」\n*💵Uang :* 0\n*💫Limit Awal :* ${limitawal}\n*📍Note :*\n*» Uang Didapat Dari Mengakses Fitur Bot*\n*» Limit Didapat Dari Buy/Naik lvl*\n\n*「 Created By ${Miminnya} 」*`
            haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${namaUser}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=https://www.linkpicture.com/q/20211125_113317.jpg`)
            gbutsan = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}]
            pto =await pebz.prepareMessage(from, haitod, image)    
            gbuttonan = {
            imageMessage: pto.message.imageMessage,
            contentText: `${anuu}`,
            footerText: 'JOIN TO USERBOT☕',
            buttons: gbutsan,
            headerType: 4
            }
            await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
	        console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	        addATM(sender)
            addLevelingId(sender)
         // checkLimit(sender)
	     // console.log(e)
            setTimeout( () => {
			pebz.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Terdaftar Di Database BOT*`)
		    }, 2000)
            break				     
      case 'menucatalog':
            const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
            menunya = `${ucapanWaktu} ${pushname}
            
『 *MEDIA MENU* 』
々 _smeme <replyimg>_
々 _textstic <addtext>_
々 _toimg <replysticker>_
々 _sticker <send/replyimg>_
々 _pmeme <replyimg+text|txt>_

『 *FUN TIME* 』
々 _truth_
々 _dare_
々 _darkjokes_

『 *DOWLOADER* 』
々 _play <query>_
々 _ytmp3 <link>_
々 _ytaudio <link>_
々 _ytmp4 <link>_
々 _tiktok <link>_

『 *GAME MENU* 』
々 _next_

『 *SEARCH MENU* 』
々 _pinterest <query>_
々 _chara <queryimg>_

『 *GROUP MENU* 』
々 _level_
々 _event_
々 _group_
々 _welcome_
々 _tagall <admin>_
々 _hidetag <admin>_
々 _next_

『 *PROFIL USER!* 』
々 _limit_
々 _dompet_
々 _buylimit_
々 _ceklevel_
々 _transfer <tag|jmlh>_

『 *KODE PEKOB* 』
々 _nhentaipdf <kode>_
`
            var imgs = await pebz.prepareMessage('0@c.us', gambar, image, { thumbnail: gambar })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await pebz.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "4457725420906655",
            "title": `THIS IS A MENU`,
            "description": menunya,
            "footerText": `メFEBRIBOT`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `Please Use prefix+command Example : ${prefix}sticker`,
            "url": `Total ${_registered.length} Pengguna Bot`
            },
            "businessOwnerJid": `${ownerNumber}@s.whatsapp.net`,
            }
            }, { quoted: fkontak, mimetype: 'image/jpeg' })
            pebz.relayWAMessage(ctlg)
            break
//================================================================================/
//======================= A L L  F U N C T I O N  B U T T O N =======================/
//================================================================================/
     case 'group': case 'gc': case 'grup':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `${prefix}opengc`, buttonText: { displayText: 'OPEN️' }, type: 1 },
           { buttonId: `${prefix}closegc`, buttonText: { displayText: 'CLOSE' }, type: 1 }]
          sendButLocation(from, menu, fake, gambar, but)
          break
    case 'welcome': case 'welkom':
	      if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `${prefix}wel on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `${prefix}wel off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButLocation(from, menu, fake, gambar, but)
          break
    case 'level': case 'lvl':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `${prefix}leveling enable`, buttonText: { displayText: 'ON' }, type: 1 },
           { buttonId: `${prefix}leveling disable`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButLocation(from, menu, fake, gambar, but)
          break
    case 'event': case 'party':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `${prefix}eventnya 1`, buttonText: { displayText: 'ON' }, type: 1 },
           { buttonId: `${prefix}ecentnya 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButLocation(from, menu, fake, gambar, but)
          break                                                    
//================================================================================/
//============================ P R O F I L E  M E N U ==============================/
//================================================================================/
    case 'dompet':
	  	  if (!isRegistered) return reply(ind.noregis(prefix, pushname))
	  	  if (isGroup) return reply('Gunakan Di Chat Pribadi Kak')
		  const kantong = checkATMuser2(sender)
		  reply(ind.uangkau(pushname, sender, kantong))
		  break
    case 'leveling':
          if (!isGroup) return reply(mes.only.group)
          if (!isGroupAdmins) return reply(ind.admin())
          if (args.length < 1) return reply('Boo :𝘃')
          if (args[0] === 'enable') {
          if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
          _leveling.push(from)
          fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
          reply(ind.lvlon())
          } else if (args[0] === 'disable') {
          _leveling.splice(from, 1)
          fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
          reply(ind.lvloff())
          } else {
          reply(ind.satukos())
          }
          break
    case 'eventnya':
	      if (!isGroup) return reply(mes.only.group)
	  	  if (!isOwner) return reply(ind.ownerb())
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply(ind.satukos())
		  }
		  break
    case 'mining':
          if (!isRegistered) return reply(ind.noregis(prefix, pushname))
	     // if (isBanned) return reply(ind.baned())
          if (isLimit(sender)) return reply(ind.limitend(pushname))
          if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
          if (isOwner) {
          const one =  Math.ceil(Math.random() * 1000)
          const duit = checkATMuser(sender)
          addLevelingXp(sender, one)
          const duet = checkATMuser(sender)
          addLevelingLevel(sender, 99)
          reply(`Nih Untukmu Owner♥ ${one}Xp sama uang ${duit}`)
          }else{
          const mining = Math.ceil(Math.random() * 500)
          const duet = checkATMuser(sender)
          addLevelingXp(sender, mining)
          await reply(`*selamat* ${pushname} kamu mendapatkan\nUang : ${duet}\nExpLevel : *${mining}Xp*`)
          }
          await limitAdd(sender)
	 	  break
	case 'transfer':
	 	  if (!isRegistered) return reply(ind.noregis(prefix, pushname))
		  if (!q.includes('|')) return  reply(ind.wrongf())
          const tujuan = q.substring(0, q.indexOf('|') - 1)
          const jumblah = q.substring(q.lastIndexOf('|') + 1)
          if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
          if (jumblah < 100 ) return reply(`minimal transfer 100`)
          if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
          const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
          fee = 0.005 *  jumblah
          hasiltf = jumblah - fee
          addKoinUser(tujuantf, hasiltf)
          confirmATM(sender, jumblah)
          addKoinUser('6285849261085@s.whatsapp.net', fee)
          reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
          break
	case 'buylimit':
		  if (!isRegistered) return reply(ind.noregis())
	  	  payout = body.slice(10)
		  const koinPerlimit = 1000
		  const total = koinPerlimit * payout
		  if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
	  	  if ( checkATMuser(sender) >= total ) {
	  	  confirmATM(sender, total)
		  bayarLimit(sender, payout)
		  await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil ID pembayaran\n${createSerial(15)}`)
		  }
		  reply(`terimakasih kak ${pushname} telah melakukan pembelian limit!!`) 
	  	  break          
    case 'limit':
          if (!isRegistered) return reply(ind.noregis(prefix, pushname))
	      checkLimit(sender)
		  break
    case 'ceklevel':
          if (!isRegistered) return reply(ind.noregis(prefix, pushname))
          if (!isLevelingOn) return reply(ind.lvlnoon())
          if (!isGroup) return reply(ind.groupo())
          const userLevel = getLevelingLevel(sender)
          const userXp = getLevelingXp(sender)
          if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
          const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
          resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
           pebz.sendMessage(from, resul, text, { quoted: mek})
           .catch(async (err) => {
           console.error(err)
           await reply(`Error!\n${err}`)
           })
		   break
	 case 'leaderboard': case 'lb':
		   if (!isRegistered) return reply(ind.noregis(prefix, pushname))
		   if (!isGroup) return reply(ind.groupo())
		   _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
		   uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
           let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
           let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
           let nom = 0
           try {
           for (let i = 0; i < 10; i++) {
           nom++
           leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
           leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
           }
           await reply(leaderboardlvl)
           await reply(leaderboarduang)
           } catch (err) {
           console.error(err)
           await reply(`minimal 10 user untuk bisa mengakses database`)
           }
	       break		    		            	  
//================================================================================/
//============================ S E A R C H  M E N U ===============================/
//================================================================================/
//+++ IMG SEARCH        
  case 'imgsearch': case 'chara':
        if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
        let im = await hx.chara(q)
        let acak = im[Math.floor(Math.random() * im.length)]
        let li = await getBuffer(acak)   
        gbutsan = [{buttonId: `${prefix}imgsearch ${q}`, buttonText: {displayText: '✗⃝➡️NEXT'}, type: 1}]
        pto =await pebz.prepareMessage(from, li, image)    
        gbuttonan = {
        imageMessage: pto.message.imageMessage,
        contentText: `Menampilkan ${command} ${q}`,
        footerText: 'Klil Next Untuk Gambar Selanjutnya☕',
        buttons: gbutsan,
        headerType: 4
        }
        await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break                  
//+++ PINTEREST SEARCH      
  case 'pinterest':
        if(!q) return reply('gambar apa?')
        let pin = await hx.pinterest(q)
        let ac = pin[Math.floor(Math.random() * pin.length)]
        let di = await getBuffer(ac)
        gbutsan = [{buttonId: `${prefix}imgsearch ${q}`, buttonText: {displayText: '✗⃝➡️NEXT'}, type: 1}]
        pto =await pebz.prepareMessage(from, di, image)    
        gbuttonan = {
        imageMessage: pto.message.imageMessage,
        contentText: `Menampilkan ${command} ${q}`,
        footerText: 'Klil Next Untuk Gambar Selanjutnya☕',
        buttons: gbutsan,
        headerType: 4
        }
        await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break
//================================================================================/
//============================ F U N  T I M E  M E N U =============================/
//================================================================================/
      case 'trut':
      case 'truth':
            if (!isGroup) return reply('KhususGrup')
            const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
	    	const ttrth = trut[Math.floor(Math.random() * trut.length)]
		    //truteh = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
            sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
	     	break
      case 'dare':
	    	if (!isGroup) return reply('KhususGrup')
	    	const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
	    	const der = dare[Math.floor(Math.random() * dare.length)]
      		//todz = await getBuffer(`https://a.uguu.se/qMMQeGOl.jpg`)
	        but = [{ buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }]
            sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',td, but, {quoted: mek})
            break
      case 'darkjokes':
            if (!isGroup) return reply(mess.only.group)
           let data = fs.readFileSync('./lib/darkjokes.js');
	       jsonData = JSON.parse(data);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   hasil = await getBuffer(randKey.result)
		   gbutsan = [{buttonId: `${prefix}darkjokes`, buttonText: {displayText: '✗⃝➡️NEXT'}, type: 1}]
           pto =await pebz.prepareMessage(from, hasil, image)    
           gbuttonan = {
           imageMessage: pto.message.imageMessage,
           contentText: `Gelap Kek Masa Depanlu`,
           footerText: 'Klil Next Untuk Gambar Selanjutnya☕',
           buttons: gbutsan,
           headerType: 4
           }
           await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
		   break

//================================================================================/
//============================== D O W L O A D E R ================================/
//================================================================================/

    case 'play':       
           if (args.length < 1) return reply(`Send command *${prefix}play query`)
           reply(mess.wait)
           let yut = await yts(q)
           yta(yut.videos[0].url)             
           .then(async(res) => {
           const { thumb, title, filesizeF, filesize } = res
           const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n\n•💬 Title : ${yut.all[0].title}\n•⏰️ Uploaded on : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Duration : ${yut.all[0].timestamp}\n•👑 Channel : ${yut.all[0].author.name}\n•🔗 Link : ${yut.all[0].url}`
           ya = await getBuffer(thumb)
           py =await pebz.prepareMessage(from, ya, image)
           gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
           gbuttonan = {
           imageMessage: py.message.imageMessage,
           contentText: capti,
           footerText: 'Please select type☕',
           buttons: gbutsan,
           headerType: 4
           }
           await pebz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
           break         
     case 'ytmp3':
           if (args.length < 1) return reply('Link?')
           if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link not valid')
           reply("Please Waiting!! Downloading Media. . .")
           teks = args.join(' ')
           res = await y2mateA(teks)
           sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
           break         
     case 'ytmp4':
           if(!q) return reply('linknya?')            
           res = await ytv(`${q}`).catch(e => {
           reply('```[ ! ] Error Saat Mengirim Video```')})
           sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
           break            
     case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':
 	       if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		   if (!q) return reply('Link?')
 		   reply(mess.wait)
		   hx.ttdownloader(`${args[0]}`)
    	   .then(result => {
    	   const { wm, nowm, audio } = result
    	   axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    	   .then(async (a) => {
    	   me = `Dont Forget To Subscriber https://youtube.com/c/FEBZABOTZ`
	       pebz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
    	   })
		   })
		   break
//================================================================================/
//============================= M E D I A  M E N U ================================/
//================================================================================/
     case 'potomeme': case 'pmeme':
           if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           try {
           if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
           reply(mess.wait)
           var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
           var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           var media = await pebz.downloadAndSaveMediaMessage(enmedia)
           var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
           var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
           pebz.sendMessage(from, resu, image, {quoted: troli})
           fs.unlinkSync(media)
           } catch (e) {
           return reply(`${e}`)
           console.log(e)
           }
           break   
     case 'smeme': case 'stickmeme': case 'sm': {
           var top = q.split('|')[0] ? q.split('|')[0] : ''
           var bottom = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
           ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           owgi = await  pebz.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
           tekks = `${anu.display_url}`
           ranp = getRandom('.gif')
           rano = getRandom('.webp')
           anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
           sendStickerFromUrl(from, `${anu1}`)
           } else {
           reply('Gunakan foto!')
           } 
           }
           break      
      case 'textstic':
            if (args.length == 0) return reply(`Example: ${prefix + command} pebz`)
            buffer = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${q}&color=black&apikey=${HardiApi}`)
            pebz.sendMessage(from, buffer, sticker, { quoted: troli })
            break
      case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await pebz.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
			buffer = fs.readFileSync(ran)
			pebz.sendMessage(from, buffer, image, {quoted: fkontak})
			fs.unlinkSync(ran)
			})
			break            
      case 'sticker': case 'stiker': case 'sg': case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pebz.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply('error')
            })
            .on('end', function () {
            pebz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await pebz.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            pebz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
            }
            break
//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/ 

           //+++ WELCOME +++\\
                    case 'wel':   
         if (!isGroup) return reply(mess.only.group)
         if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
         if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
         if ((args[0]) === 'on') {
         if (isWelkom) return reply('welcome sudah aktif')
         _welkom.push(from)
         fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else if ((args[0]) === 'off') {
         if (!isWelkom) return reply('welcome sudah off sebelumnya')
             _welkom.splice(from, 1)
         fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
         reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
         } else {
         reply('on untuk mengaktifkan, off untuk menonaktifkan')
         }
         break
     case 'opengc':
    	   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
           reply(`Sukses Membuka Grup ${groupName}`)
		   pebz.groupSettingChange(from, GroupSettingChange.messageSend, false)
		   break
    case 'closegc':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
		  reply(`Sukses Menutup Grup ${groupName}`)
		  pebz.groupSettingChange(from, GroupSettingChange.messageSend, true)
		  break         
   case 'hidetag':
        if (!isGroup) return reply(mess.only.group)
     	if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
    	var value = args.join(' ')
		var group = await pebz.groupMetadata(from)
		var member = group['participants']
		var mem = []
    	member.map(async adm => {
		mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		})
		var optionshidetag = {
	    text: value,
		contextInfo: { mentionedJid: mem },
		quoted: mek
		}
	    pebz.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": gambar} }  } })
	    break
   case 'tagall':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					members_id = []
			teks = `🎌 Group : *${groupName}*\n💫 Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *TAG ALL* ⊶\n`
			for (let mem of groupMembers) {
						teks += `├> @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
			teks += `└──────────────`
			mentions(teks, members_id, true)
			break
           
//================================================================================/
//============================ A L L  F U N C T I O N ==============================/
//================================================================================/           
            case 'donasi':
	    	pebz.sendMessage(from, donasi(prefix, donasi), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break                 
		//  if (!isOwner && !isGroupAdmins) return reply('Gadaaa bang') 
            case 'nhentaipdf': case 'nhentai':
             if (!isOwner) return reply('Gadaaa bang')                   
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=NGONTOLLAHKAUDEK`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    but = [
           { buttonId: `${prefix}nuklir`, buttonText: { displayText: 'NUKLIR' }, type: 1 },
           { buttonId: `${prefix}hemtai`, buttonText: { displayText: 'NHENTAI' }, type: 1 }]
          sendButLocation(from, `Pilih Berooo`, fake, gambar, but)
                    await pebz.sendMessage(from, ini_buffer, document, { quoted: troli, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                      case 'nuklir':
                       if (!isOwner) return reply('Gadaaa bang')                   
					pebz.sendMessage(from, kodenime(prefix, kodenime), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
            case 'hemtai':
             if (!isOwner) return reply('Gadaaa bang')                   
                    //if (!isGroup) return reply(mess.only.group)
					pebz.sendMessage(from, nuklir(prefix, nuklir), text, {quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break                        
                
//================================================================================/
//============================ E N D   F U N C T I O N =============================/
//================================================================================/ 

default:
	if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				   try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
			    	} catch (err) {
					reply(`${err}`)
				    }
		        	} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
			    	try {
					return pebz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
				    } catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	}
}


	
    
