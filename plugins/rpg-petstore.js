
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hrobo = 10
  
  let hlion = 10
  let hrhinoceros = 10
  let hdragon = 10
  let hcentaur = 10
  let hkyubi = 10
  let hgriffin = 10
  let hphonix = 10
  let hwolf = 10

let logo = `${htki} PET STORE ${htka}\n${htka}`
let caption = `

${htjava} N O R M A L ${htjava}
ð *Cat:* ${hcat} ð
ð *Dog:* ${hdog} ð
ð *Horse:* ${hhorse} ð
ð¦ *Fox:* ${hfox} ð
ð¤ *Robo:* ${hrobo} ð

${htjava} S P E C I A L ${htjava}
ð¦ *lion:* ${hlion} ð
ð¦ *rhinoceros:* ${hrhinoceros} ð
ð *dragon:* ${hdragon} ð
ð  *centaur:* ${hcentaur} ð
ð¦ *kyubi:* ${hkyubi} ð
ð¦ *griffin:* ${hgriffin} ð
ð¦¤ *phonix:* ${hphonix} ð
ðº *wolf:* ${hwolf} ð

${htjava} A B I L I T Y ${htjava}
â ð â¢ á´á´á´ :
- ÉªÉ´á´Êá´á´sá´ Êá´á´Êá´Ê 5% / Êá´á´ á´Ê á´¡Êá´É´ á´sá´ *.Êá´á´Ê*

â ð â¢ á´á´É¢ :
- á´á´á´ÉªÉ´É¢ sá´á´É´...

â ð â¢ Êá´Êsá´ :
- á´á´á´ÉªÉ´É¢ sá´á´É´...

â ð¦ â¢ Òá´x :
- á´á´á´ÉªÉ´É¢ sá´á´É´...
`
const sections = [
   {
	title: "Buy A Pet",
	rows: [
	    {title: "ð Cat", rowId: ".petshop cat", description: "Adopt A Cat"},
	    {title: "ð Dog", rowId: ".petshop dog", description: "Adopt A Dog"},
	    {title: "ð Horse", rowId: ".petshop horse", description: "Adopt A Horse"},
	    {title: "ð¦ Fox", rowId: ".petshop fox", description: "Adopt A Fox"},
	    {title: "ð¤ Robo", rowId: ".petshop robo", description: "Buy A Robo"},
	]
    },{
	title: "Special Pet",
	rows: [
	{title: "ð¦ lion", rowId: ".petshop lion", description: "Adopt A lion"},
    {title: "ð¦ rhinoceros", rowId: ".petshop rhinoceros", description: "Adopt A rhinoceros"},
    {title: "ð dragon", rowId: ".petshop dragon", description: "Adopt A dragon"},
    {title: "ð  centaur", rowId: ".petshop centaur", description: "Adopt A centaur"},
    {title: "ð¦ kyubi", rowId: ".petshop kyubi", description: "Adopt A kyubi"},
    {title: "ð¦ griffin", rowId: ".petshop griffin", description: "Adopt A griffin"},
    {title: "ð¦¤ phonix", rowId: ".petshop phonix", description: "Adopt A phonix"},
    {title: "ðº wolf", rowId: ".petshop wolf", description: "Adopt A wolf"}
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: logo,
  buttonText: "ADOPT ME ð¾",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hcat) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hcat
            global.db.data.users[m.sender].cat += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
          case 'dog':
          if (user.dog > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hdog) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hdog
            global.db.data.users[m.sender].dog += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
          case 'fox':
          if (user.fox > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hfox) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hfox
            global.db.data.users[m.sender].fox += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
          case 'horse':
          if (user.horse > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hhorse) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hhorse
            global.db.data.users[m.sender].horse += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
          case 'robo':
          if (user.robo > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hrobo) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hrobo
            global.db.data.users[m.sender].robo += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'lion':
          if (user.lion > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hlion) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hlion
            global.db.data.users[m.sender].lion += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'rhinoceros':
          if (user.rhinoceros > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hrhinoceros) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hrhinoceros
            global.db.data.users[m.sender].rhinoceros += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'dragon':
          if (user.dragon > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hdragon) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hdragon
            global.db.data.users[m.sender].dragon += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'centaur':
          if (user.centaur > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hcentaur) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hcentaur
            global.db.data.users[m.sender].centaur += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'kyubi':
          if (user.kyubi > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hkyubi) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hkyubi
            global.db.data.users[m.sender].kyubi += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'griffin':
          if (user.griffin > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hgriffin) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hgriffin
            global.db.data.users[m.sender].griffin += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'phonix':
          if (user.phonix > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hphonix) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hphonix
            global.db.data.users[m.sender].phonix += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            case 'wolf':
          if (user.wolf > 0) return m.reply('Kamu sudah memilik ini')
            if(user.pet < hwolf) return m.reply(`Pet Token anda kurang`)
            global.db.data.users[m.sender].pet -= hwolf
            global.db.data.users[m.sender].wolf += 1
            m.reply("Selamat anda mempunyai pet Baru ! ð")
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['petshop']
handler.tags = ['rpg']
handler.command = /^(petshop)/i

export default handler