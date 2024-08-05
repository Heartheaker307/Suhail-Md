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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_32_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NSxcbiAgICAgICAgODksXG4gICAgICAgIDEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0VmdObmZvbGN1a2Z1ZmRHMUI0YVBWRkpzeXQ5TGlIR20yVitXN0dlcnVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmaWM2NnFJT1JVeTBWdnM5TnplcGpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0N2UxNTQ0LTNlOTUtNGM5OC1hNDhiLTJjNTA5NjVjM2ZlMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAzOSxcbiAgICAgIDIxMixcbiAgICAgIDY2LFxuICAgICAgMjM4LFxuICAgICAgMTU4LFxuICAgICAgMjE3LFxuICAgICAgMTY1LFxuICAgICAgMTgsXG4gICAgICA5NixcbiAgICAgIDIsXG4gICAgICAxODUsXG4gICAgICAxMDIsXG4gICAgICAxODUsXG4gICAgICAxOTUsXG4gICAgICA0LFxuICAgICAgMTAzLFxuICAgICAgMjUxLFxuICAgICAgMTQ3LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxMTMsXG4gICAgICAyMCxcbiAgICAgIDE2MixcbiAgICAgIDE3NyxcbiAgICAgIDcwLFxuICAgICAgODksXG4gICAgICAyMDMsXG4gICAgICAwLFxuICAgICAgMTksXG4gICAgICAxMDYsXG4gICAgICAxMDQsXG4gICAgICAyMDksXG4gICAgICA1NCxcbiAgICAgIDEzMyxcbiAgICAgIDE3MyxcbiAgICAgIDQwLFxuICAgICAgMTA0LFxuICAgICAgMjM4LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE3N0hSQTdZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5OTQyNTI3Nzk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM0NjM0NjkyMTk0NTU4OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmFqNWNzSEVJTDl3N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhdTV3Qkk1UXU2RHZ0enFGc3JkUkZwbXAzWFNLZnRnWGp6MTd1RkpVTEU4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNwWVlZK1dSR0haZHpDRnd4elRlN1YzVEJad2djT0ZkR2N3UXAwekkxUXl4cGovV1hkK1g1QkR5TVZkUWNDYW1MNERlS3BoYXpWN0dSaCtSczdnM0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZ2ZmptdTJ1QmVKY3p2ZzFpNHA3MWkzWU1rRzE2YVZJblFyZmYyQjU0ZlhWUGVPOFQycE8wWUU4SWJrOVBCN0p0YnlTS0NISlIzaUNISXdDZzErcURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzk5NDI1Mjc3OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODc1NTI2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkJ1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5ZzFPMmJpdHczbVF6VStnSWc2Qit4eVJGK3ZBWkpTZm9DNGNpVllCVHhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMzc5OTM5NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg3NTUzMzI2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

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
