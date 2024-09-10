const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*📍REPO LINK 🌸👇*

🌸◦https://github.com/nirogfx01/NIRO-MD

*📍PLEASE FOLLOW MY WHATSAPP CHANNEL🌸👇*

🌼◦ https://whatsapp.com/channel/0029VajfIRL8PgsF4yj7LN1J

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴɪʀᴏ-ᴍᴅ*

`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c8858afdce80eeb01b47e.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
