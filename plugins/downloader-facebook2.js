import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `â¨ *á´ÊÊ:* ${url}`, m)
  let info = `ð *Êá´á´á´ÉªÉ´É¢.....*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, sig, 'ÉªÉ´sá´á´É¢Êá´á´â¨', null, null, [
['ð¥ï¸ââªÍ¡ê¦½á´á´É´á´ðï¸ââªÍ¡ê¦½', '/menu'],
['âââï¸á´á´á´á´á´á´á´á´É´ Êá´á´ââðï¸', '/ping']
], m,)
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook2|fb2)(downloder2|dl2)?)$/i
handler.exp = 35
export default handler
