import fs from 'fs'
import translate from '@vitalets/google-translate-api'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'
import { parsePhoneNumber } from 'libphonenumber-js'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import chalk from 'chalk'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
 
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = gataVidMenu
let pareja = global.db.data.users[m.sender].pasangan 
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'
moment.locale(mid.idioma_code)
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) {
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = countryData.name
const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
}else{
lugarMoment = moment().tz('America/Lima')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = 'America'
ciudad = 'Lima'
}	


let menu =`
  ╭━〔 *🕷️ Free Fire Sur 🕷️* 〕
 *┃➤* _${usedPrefix}ListaVs14_
 *┃➤* _${usedPrefix}ListaVs16_
 *┃➤* _${usedPrefix}ListaVs18_
 *┃➤* _${usedPrefix}ListaVs20_
 *┃➤* _${usedPrefix}ListaVs22_
  ╰━━━━━━━━━━━━━`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: 'https://www.instagram.com/cristhofer_yallico', mediaType: 1, description: null, title: gt, body: ' 🕷️ 𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎 𝐗', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu }}})
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}


}

//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.command = /^(ListaVs1|\?)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

// Función para formatear arrays de comandos
function generateCommand(commandsArray, usedPrefix) {
const formattedCommands = commandsArray
.filter(command => {
const comandoValido = command.comando && typeof command.comando === 'function' && command.comando()
const descripcionValida = command.descripcion && typeof command.descripcion === 'function'
const contextoValido = typeof command.contexto === 'string' && command.contexto.trim() !== ''
return comandoValido || descripcionValida || contextoValido
})
.map((command, index, array) => {
const prefix = (command.showPrefix === true && ((typeof command.comando === 'function' && typeof command.comando() === 'string' && command.comando().trim() !== '') ||
(typeof command.comando === 'string' && command.comando.trim() !== ''))) ? usedPrefix : ''
let formattedCommand = ''
if (command.comando) {
if (typeof command.comando === 'function') {
const commandResult = command.comando()
if (typeof commandResult === 'string') {
formattedCommand = commandResult.trim()
}} else if (typeof command.comando === 'string') {
formattedCommand = command.comando.trim()
}}
if (formattedCommand.includes(',')) {
formattedCommand = mid.idioma_code === 'es' ? formattedCommand.split(',')[0].trim() : formattedCommand.split(',')[1].trim()
}
let formattedDescription = ''
if (command.descripcion) {
if (typeof command.descripcion === 'function') {
const descriptionResult = command.descripcion()
if (typeof descriptionResult === 'string') {
formattedDescription = descriptionResult.trim()
}} else if (typeof command.descripcion === 'string') {
formattedDescription = command.descripcion.trim()
}}
if (formattedDescription.includes('||')) {
formattedDescription = mid.idioma_code === 'es' ? formattedDescription.split('||')[0].trim() : formattedDescription.split('||')[1].trim()
}
let formattedContext = ''
if (command.contexto) {
if (typeof command.contexto === 'function') {
const contextResult = command.contexto()
if (typeof contextResult === 'string') {
formattedContext = contextResult.trim()
}} else if (typeof command.contexto === 'string' && command.contexto.trim() !== '') {
formattedContext = command.contexto.trim()
}}
let message = ''
if (formattedCommand) {
message += `✓ \`${prefix}${formattedCommand}\``
if (formattedDescription) {
message += `\n${(command.descripcion && typeof command.descripcion === 'function') ? '𖡡' : '≡'} \`\`\`${formattedDescription}\`\`\``
}
if (formattedContext) {
message += '\nⓘ _' + formattedContext + '_' + (index !== array.length - 1 ? '\n' : '')
}}
return message
})
.filter(message => message !== '')
return formattedCommands.join('\n')
}

// comando: Si hay comando en español y inglés separar por (,) máximo 2 comandos 
// descripcion: Parámetros para usar el comando. Separar por (||) máximo 2 descripciones 
// contexto: Explicación de que trata el comando
// showPrefix: Usar true para que muestre el prefijo, de lo contrario usar false
// Si algún objeto no se va usar dejar en false, menos el objeto "comando" ya que si es false no mostrará nada
