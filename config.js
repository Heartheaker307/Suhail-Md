const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴛᴀʀʙᴏʏ-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919061801408";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917994252779,919061801408";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_24_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyLFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc1LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjWldsZ25Mb3hxSkZQbXN2SmNTMXBNOWtrSFFLRHIyMTJLSno0Z2FPUkVjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIV0Ftb0NHT1R5MkVMeXUwcnk2YnJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2NTIxNTc4LWI2YTItNDRhNC05YjdmLWYwMzY4MTM2NmQyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDE3MSxcbiAgICAgIDg3LFxuICAgICAgMTg0LFxuICAgICAgMixcbiAgICAgIDYzLFxuICAgICAgOTcsXG4gICAgICA5MCxcbiAgICAgIDE3NSxcbiAgICAgIDE4OSxcbiAgICAgIDE5NixcbiAgICAgIDIxNyxcbiAgICAgIDE4MyxcbiAgICAgIDEzOCxcbiAgICAgIDExMCxcbiAgICAgIDMsXG4gICAgICAyMzksXG4gICAgICAyMDQsXG4gICAgICAxOTIsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAxMjEsXG4gICAgICAxMTgsXG4gICAgICA0MCxcbiAgICAgIDIxNyxcbiAgICAgIDU4LFxuICAgICAgOTYsXG4gICAgICAxMTMsXG4gICAgICA4MSxcbiAgICAgIDE2MyxcbiAgICAgIDEwNCxcbiAgICAgIDEwNyxcbiAgICAgIDE5MSxcbiAgICAgIDE2MyxcbiAgICAgIDE5NSxcbiAgICAgIDIwMyxcbiAgICAgIDYwLFxuICAgICAgMTMyLFxuICAgICAgMTc4LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkNKTDYxS0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTA2MTgwMTQwODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg4MTE4NTExNDkzOTM6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMnk4dThDRU8zazByUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInEzZC82MkdWNm9YejM5Tmc5QWMvaXNBSTg3RmFKYVdHRTBUMElSTUtBd1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSDhSLzB6NmdPWkc0eDJ2RnpYRm0xa1E5STlrcTVjTithcVh1YjJWNVAwZWp2eFN4bFJtNTdNR1pBZ3dBYk95VmFDeUREOTlWclhQUklPWnovejMrQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTEY1V2pmZG15bXQ5S004Nmdad2JVdkVZRnFsaUJ0OW55SGR1RVFWTWNjNUIrZUZZQ0YxWkQwVHdOcDRlQUQ4b2lNS2d1UzhUU2NsUW1ib1hCUEFMaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MDYxODAxNDA4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMjEwNDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMUVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMxRS5qc29uIjogIntcImtleURhdGFcIjpcImVpbFJMWHo3YUhLQXZoTkpLVGVNcFlxMlpHckdjWDhZZGtNUjJPaXZ0Mjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcxNTI5MDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5ODMwNTk5MjBcIn0iCn0="
  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| 𝛿𝜯𝜶𐑾𝜝𝝄𝛾  ꭗ𝝐𐑾 ⁶⁶⁶¯"",
  packname: process.env.PACK_NAME || "𝛿𝜯𝜶𐑾𝜝𝝄𝛾  ꭗ𝝐𐑾 ⁶⁶⁶¯",
  botname : process.env.BOT_NAME  || "ꜱᴛᴀʀʙᴏʏ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝐇𝐄𝐀𝐑𝐓 𝐇𝐀𝐂𝐊𝐄𝐑",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
