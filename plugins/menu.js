const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `*👋 Hello ${pushname}*

*╭───────────◉◉►*
*│Hey, I'm NIRO-MD,
*│I'm always here for help you.🌝 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│🧚𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🧚
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.movie*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
*│►.apk*
*│►.img*
*│►.rvideo*

│🌛𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🌚
*│►.ai*

│💖𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💖
*| .restart*

│💫𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
*│►.about*

│💫𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│►.kylie*
*│►.hack*
*│►.define*
*│►.gpass*

│𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💖
*│►.promote*
*│►.demote*
*│►.remove*
*│►.getpic*
*│►.del*
*│►.add*
*│►.setwelcome*
*│►.setgoodbye*

*©𝗡𝗜𝗥𝗢 𝗠𝗗 🌝`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c8858afdce80eeb01b47e.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
