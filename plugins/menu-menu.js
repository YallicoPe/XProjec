import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu =` ╭━〔 *🕷️ Proyecto Creador 🕷️* 〕
*┃➤ Creador : Yallico*
*┃➤ Instagram : ${uptime}*
*┃➤ Activo : ${uptime}*
 ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Info 🕷️* 〕
 *┃➤* _${usedPrefix}server_
 *┃➤* _${usedPrefix}donar_
 *┃➤* _${usedPrefix}estado_
 *┃➤* _${usedPrefix}creador_
 *┃➤* _${usedPrefix}velocidad_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Free Fire 🕷️* 〕
 *┃➤* _${usedPrefix}Reglas / Free Fire_
 *┃➤* _${usedPrefix}ListaSur/ Versus_
 *┃➤* _${usedPrefix}ListaEeUu / Versus_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Spamer 🕷️* 〕
 *┃➤* _${usedPrefix}SpamApk_
 *┃➤* _${usedPrefix}Comunidades_
  ╰━━━━━━━━━━━━━

   ╭━〔 *🕷️ Proyecto Edits 🕷️* 〕
 *┃➤* _${usedPrefix}ApkEdit_
 *┃➤* _${usedPrefix}DriveEdits_
 *┃➤* _${usedPrefix}Dzn / Servicio De Dzn - Comprar Edits_
  ╰━━━━━━━━━━━━━

   ╭━〔 *🕷️ Proyecto Menu 🕷️* 〕
 *┃➤* _${usedPrefix}MenuHot_
 *┃➤* _${usedPrefix}MenuMusic_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Premium 🕷️* 〕
 *┃➤* _${usedPrefix}listapremium | listprem_
 *┃➤* _${usedPrefix}pase premium_
 *┃➤* _${usedPrefix}pass premium_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Juegos 🕷️* 〕
 *┃➤* _${usedPrefix}mates | matemáticas | math_
 *┃➤* _${usedPrefix}lanzar *cara* | *cruz*_
 *┃➤* _${usedPrefix}ppt *piedra : papel : tijera*_
 *┃➤* _${usedPrefix}tictactoe | ttt *sala*_
 *┃➤* _${usedPrefix}deltictactoe | delttt_
 *┃➤* _${usedPrefix}topgays_
 *┃➤* _${usedPrefix}fake_
 *┃➤* _${usedPrefix}toppajer@s_
 *┃➤* _${usedPrefix}topput@s_
 *┃➤* _${usedPrefix}topintegrantes | topintegrante_
 *┃➤* _${usedPrefix}toplagrasa | topgrasa_
 *┃➤* _${usedPrefix}toppanasfrescos | toppanafresco_
 *┃➤* _${usedPrefix}topshiposters | topshipost_
 *┃➤* _${usedPrefix}toplindos | toplind@s_
 *┃➤* _${usedPrefix}topfamosos | topfamos@s_
 *┃➤* _${usedPrefix}topparejas | top5parejas_
 *┃➤* _${usedPrefix}gay | gay *@tag*_
 *┃➤* _${usedPrefix}gay2 *nombre : @tag*_
 *┃➤* _${usedPrefix}lesbiana *nombre : @tag*_
 *┃➤* _${usedPrefix}lesbi1 *nombre : @tag*_
 *┃➤* _${usedPrefix}manca *nombre : @tag*_
 *┃➤* _${usedPrefix}manco *nombre : @tag*_
 *┃➤* _${usedPrefix}pajero *nombre : @tag*_
 *┃➤* _${usedPrefix}pajera *nombre : @tag*_
 *┃➤* _${usedPrefix}puto *nombre : @tag*_
 *┃➤* _${usedPrefix}puta *nombre : @tag*_
 *┃➤* _${usedPrefix}rata *nombre : @tag*_
 *┃➤* _${usedPrefix}love *nombre : @tag*_
 *┃➤* _${usedPrefix}doxear *nombre : @tag*_
 *┃➤* _${usedPrefix}doxxeame_
 *┃➤* _${usedPrefix}pregunta *texto*_
 *┃➤* _${usedPrefix}apostar | slot *cantidad*_
 *┃➤* _${usedPrefix}formarpareja_
 *┃➤* _${usedPrefix}dado_
 *┃➤* _${usedPrefix}verdad_
 *┃➤* _${usedPrefix}acertijo_
 *┃➤* _${usedPrefix}cancion_
 *┃➤* _${usedPrefix}trivia_
 *┃➤* _${usedPrefix}pelicula_
 *┃➤* _${usedPrefix}adivinanza_
 *┃➤* _${usedPrefix}reto_
 *┃➤* _${usedPrefix}ruleta_
 *┃➤* _${usedPrefix}suerte_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Ia 🕷️* 〕
 *┃➤* _${usedPrefix}geminiimg *reaccione a una foto*_
 *┃➤* _${usedPrefix}gemini *texto*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Ajustes Grupos 🕷️* 〕
 *┃➤* _${usedPrefix}enable *o* disable *bienvenida | welcome*_
 *┃➤* _${usedPrefix}enable *o* disable *avisos | detect*_
 *┃➤* _${usedPrefix}enable *o* disable *autonivel | autolevelup*_
 *┃➤* _${usedPrefix}enable *o* disable *restringir | restrict*_
 *┃➤* _${usedPrefix}enable *o* disable *antillamar | anticall*_
 *┃➤* _${usedPrefix}enable *o* disable *publico | public*_
 *┃➤* _${usedPrefix}enable *o* disable *autovisto | autoread*_
 *┃➤* _${usedPrefix}enable *o* disable *temporal*_
 *┃➤* _${usedPrefix}enable *o* disable *stickers*_
 *┃➤* _${usedPrefix}enable *o* disable *autosticker*_
 *┃➤* _${usedPrefix}enable *o* disable *reacciones | reaction*_
 *┃➤* _${usedPrefix}enable *o* disable *audios*_
 *┃➤* _${usedPrefix}enable *o* disable *modocaliente | modohorny*_
 *┃➤* _${usedPrefix}enable *o* disable *antitoxicos | antitoxic*_
 *┃➤* _${usedPrefix}enable *o* disable *antiver | antiviewonce*_
 *┃➤* _${usedPrefix}enable *o* disable *antieliminar | antidelete*_
 *┃➤* _${usedPrefix}enable *o* disable *antinternacional | antifake*_
 *┃➤* _${usedPrefix}enable *o* disable *antienlace | antilink*_
 *┃➤* _${usedPrefix}enable *o* disable *antienlace2 | antilink2*_
 *┃➤* _${usedPrefix}enable *o* disable *antitiktok | antitk*_
 *┃➤* _${usedPrefix}enable *o* disable *antiyoutube | antiyt*_
 *┃➤* _${usedPrefix}enable *o* disable *antitelegram | antitel*_
 *┃➤* _${usedPrefix}enable *o* disable *antifacebook | antifb*_
 *┃➤* _${usedPrefix}enable *o* disable *antinstagram | antig*_
 *┃➤* _${usedPrefix}enable *o* disable *antitwitter | antitw*_
 *┃➤* _${usedPrefix}enable *o* disable *soloprivados | pconly*_
 *┃➤* _${usedPrefix}enable *o* disable *sologrupos | gconly*_  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Ajustes 🕷️* 〕
 *┃➤* _${usedPrefix}configuracion_
 *┃➤* _${usedPrefix}settings_
 *┃➤* _${usedPrefix}vergrupo_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Descargas 🕷️* 〕
 *┃➤* _${usedPrefix}imagen | image *texto*_
 *┃➤* _${usedPrefix}pinterest | dlpinterest *texto*_
 *┃➤* _${usedPrefix}wallpaper|wp *texto*_
 *┃➤* _${usedPrefix}play | play2 *texto o link*_
 *┃➤* _${usedPrefix}play.1 *texto o link*_
 *┃➤* _${usedPrefix}play.2 *texto o link*_ 
 *┃➤* _${usedPrefix}ytmp3 | yta *link*_
 *┃➤* _${usedPrefix}ytmp4 | ytv *link*_
 *┃➤* _${usedPrefix}pdocaudio | ytadoc *link*_
 *┃➤* _${usedPrefix}pdocvieo | ytvdoc *link*_
 *┃➤* _${usedPrefix}tw |twdl | twitter *link*_
 *┃➤* _${usedPrefix}facebook | fb *link*_
 *┃➤* _${usedPrefix}instagram *link video o imagen*_
 *┃➤* _${usedPrefix}verig | igstalk *usuario(a)*_
 *┃➤* _${usedPrefix}ighistoria | igstory *usuario(a)*_
 *┃➤* _${usedPrefix}tiktok *link*_
 *┃➤* _${usedPrefix}tiktokimagen | ttimagen *link*_
 *┃➤* _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
 *┃➤* _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
 *┃➤* _${usedPrefix}mediafire | dlmediafire *link*_
 *┃➤* _${usedPrefix}clonarepo | gitclone *link*_
 *┃➤* _${usedPrefix}clima *país ciudad*_
 *┃➤* _${usedPrefix}consejo_
 *┃➤* _${usedPrefix}morse codificar *texto*_
 *┃➤* _${usedPrefix}morse decodificar *morse*_
 *┃➤* _${usedPrefix}fraseromantica_
 *┃➤* _${usedPrefix}historia_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Anonimo 🕷️* 〕
 *┃➤* _${usedPrefix}chatanonimo | anonimochat_
 *┃➤* _${usedPrefix}anonimoch_
 *┃➤* _${usedPrefix}start_
 *┃➤* _${usedPrefix}next_
 *┃➤* _${usedPrefix}leave_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Cmd Grupos 🕷️* 〕
 *┃➤* _${usedPrefix}add *numero*_
 *┃➤* _${usedPrefix}sacar | ban | kick  *@tag*_
 *┃➤* _${usedPrefix}grupo *abrir o cerrar*_
 *┃➤* _${usedPrefix}group *open o close*_
 *┃➤* _${usedPrefix}daradmin | promote *@tag*_
 *┃➤* _${usedPrefix}quitar | demote *@tag*_
 *┃➤* _${usedPrefix}banchat_
 *┃➤* _${usedPrefix}unbanchat_
 *┃➤* _${usedPrefix}banuser *@tag*_
 *┃➤* _${usedPrefix}unbanuser *@tag*_
 *┃➤* _${usedPrefix}admins *texto*_
 *┃➤* _${usedPrefix}invocar *texto*_
 *┃➤* _${usedPrefix}tagall *texto*_
 *┃➤* _${usedPrefix}hidetag *texto*_
 *┃➤* _${usedPrefix}infogrupo | infogroup_
 *┃➤* _${usedPrefix}grupotiempo | grouptime *Cantidad*_
 *┃➤* _${usedPrefix}advertencia *@tag*_
 *┃➤* _${usedPrefix}deladvertencia *@tag*_
 *┃➤* _${usedPrefix}delwarn *@tag*_
 *┃➤* _${usedPrefix}crearvoto | startvoto *texto*_
 *┃➤* _${usedPrefix}sivotar | upvote_
 *┃➤* _${usedPrefix}novotar | devote_
 *┃➤* _${usedPrefix}vervotos | cekvoto_
 *┃➤* _${usedPrefix}delvoto | deletevoto_
 *┃➤* _${usedPrefix}enlace | link_
 *┃➤* _${usedPrefix}newnombre | nuevonombre *texto*_
 *┃➤* _${usedPrefix}newdesc | descripcion *texto*_
 *┃➤* _${usedPrefix}setwelcome | bienvenida *texto*_
 *┃➤* _${usedPrefix}setbye | despedida *texto*_
 *┃➤* _${usedPrefix}nuevoenlace | resetlink_
 *┃➤* _${usedPrefix}enable_
 *┃➤* _${usedPrefix}disable_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Parejas 🕷️* 〕
 *┃➤* _${usedPrefix}listaparejas | listship_
 *┃➤* _${usedPrefix}mipareja | mylove_
 *┃➤* _${usedPrefix}pareja | couple *@tag*_
 *┃➤* _${usedPrefix}aceptar | accept *@tag*_
 *┃➤* _${usedPrefix}rechazar | decline *@tag*_
 *┃➤* _${usedPrefix}terminar | finish *@tag*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Votaciones 🕷️* 〕
 *┃➤* _${usedPrefix}crearvoto | startvoto *texto*_
 *┃➤* _${usedPrefix}sivotar | upvote_
 *┃➤* _${usedPrefix}novotar | devote_
 *┃➤* _${usedPrefix}vervotos | cekvoto_
 *┃➤* _${usedPrefix}delvoto | deletevoto_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Convertidores 🕷️* 〕
 *┃➤* _${usedPrefix}toimg | img | jpg *sticker*_
 *┃➤* _${usedPrefix}toanime | jadianime *foto*_
 *┃➤* _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
 *┃➤* _${usedPrefix}tovn | vn *video o audio*_
 *┃➤* _${usedPrefix}tovideo *audio*_
 *┃➤* _${usedPrefix}tourl *video, imagen*_
 *┃➤* _${usedPrefix}toenlace  *video, imagen o audio*_
 *┃➤* _${usedPrefix}tts es *texto*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Logos 🕷️* 〕
 *┃➤* _${usedPrefix}logos *efecto texto*_
 *┃➤* _${usedPrefix}menulogos2_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Efectos 🕷️* 〕
 *┃➤* _${usedPrefix}simpcard *@tag*_
 *┃➤* _${usedPrefix}hornycard *@tag*_
 *┃➤* _${usedPrefix}lolice *@tag*_
 *┃➤* _${usedPrefix}ytcomment *texto*_
 *┃➤* _${usedPrefix}itssostupid_
 *┃➤* _${usedPrefix}pixelar_
 *┃➤* _${usedPrefix}blur_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Fantasy 🕷️* 〕
 *┃➤* _${usedPrefix}fantasy | fy_
 *┃➤* _${usedPrefix}fyguia | fyguide_
 *┃➤* _${usedPrefix}fantasyinfo | fyinfo_
 *┃➤* _${usedPrefix}fyagregar | fyadd_
 *┃➤* _${usedPrefix}fycambiar | fychange_
 *┃➤* _${usedPrefix}fylista | fyl_
 *┃➤* _${usedPrefix}fantasymy | fymy_
 *┃➤* _${usedPrefix}fyentregar | fytransfer_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyectoi Anime 🕷️* 〕
 *┃➤* _${usedPrefix}chica_
 *┃➤* _${usedPrefix}chico_
 *┃➤* _${usedPrefix}cristianoronaldo_
 *┃➤* _${usedPrefix}messi_
 *┃➤* _${usedPrefix}meme_
 *┃➤* _${usedPrefix}meme2_
 *┃➤* _${usedPrefix}itzy_
 *┃➤* _${usedPrefix}blackpink_
 *┃➤* _${usedPrefix}kpop *blackpink, o exo, o bts*_
 *┃➤* _${usedPrefix}lolivid_
 *┃➤* _${usedPrefix}loli_
 *┃➤* _${usedPrefix}navidad_
 *┃➤* _${usedPrefix}ppcouple_
 *┃➤* _${usedPrefix}neko_
 *┃➤* _${usedPrefix}waifu_
 *┃➤* _${usedPrefix}akira_
 *┃➤* _${usedPrefix}akiyama_
 *┃➤* _${usedPrefix}anna_
 *┃➤* _${usedPrefix}asuna_
 *┃➤* _${usedPrefix}ayuzawa_
 *┃➤* _${usedPrefix}boruto_
 *┃➤* _${usedPrefix}chiho_
 *┃➤* _${usedPrefix}chitoge_
 *┃➤* _${usedPrefix}deidara_
 *┃➤* _${usedPrefix}erza_
 *┃➤* _${usedPrefix}elaina_
 *┃➤* _${usedPrefix}eba_
 *┃➤* _${usedPrefix}emilia_
 *┃➤* _${usedPrefix}hestia_
 *┃➤* _${usedPrefix}hinata_
 *┃➤* _${usedPrefix}inori_
 *┃➤* _${usedPrefix}isuzu_
 *┃➤* _${usedPrefix}itachi_
 *┃➤* _${usedPrefix}itori_
 *┃➤* _${usedPrefix}kaga_
 *┃➤* _${usedPrefix}kagura_
 *┃➤* _${usedPrefix}kaori_
 *┃➤* _${usedPrefix}keneki_
 *┃➤* _${usedPrefix}kotori_
 *┃➤* _${usedPrefix}kurumi_
 *┃➤* _${usedPrefix}madara_
 *┃➤* _${usedPrefix}mikasa_
 *┃➤* _${usedPrefix}miku_
 *┃➤* _${usedPrefix}minato_
 *┃➤* _${usedPrefix}naruto_
 *┃➤* _${usedPrefix}nezuko_
 *┃➤* _${usedPrefix}sagiri_
 *┃➤* _${usedPrefix}sasuke_
 *┃➤* _${usedPrefix}sakura_
 *┃➤* _${usedPrefix}cosplay_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Efectos A. 🕷️* 〕
 *┃➤* _${usedPrefix}bass_
 *┃➤* _${usedPrefix}blown_
 *┃➤* _${usedPrefix}deep_
 *┃➤* _${usedPrefix}earrape_
 *┃➤* _${usedPrefix}fast_
 *┃➤* _${usedPrefix}fat_
 *┃➤* _${usedPrefix}nightcore_
 *┃➤* _${usedPrefix}reverse_
 *┃➤* _${usedPrefix}robot_
 *┃➤* _${usedPrefix}slow_
 *┃➤* _${usedPrefix}smooth_
 *┃➤* _${usedPrefix}tupai_
  ╰━━━━━━━━━━━━━
  	
  ╭━〔 *🕷️ Proyecto Busqueda 🕷️* 〕
 *┃➤* _${usedPrefix}animeinfo *texto*_
 *┃➤* _${usedPrefix}anuel_
 *┃➤* _${usedPrefix}conejo_
 *┃➤* _${usedPrefix}drago_
 *┃➤* _${usedPrefix}feid_
 *┃➤* _${usedPrefix}narcisistas_
 *┃➤* _${usedPrefix}mangainfo *texto*_
 *┃➤* _${usedPrefix}google *texto*_
 *┃➤* _${usedPrefix}googlelyrics *texto*_
 *┃➤* _${usedPrefix}letra | lirik *texto*_
 *┃➤* _${usedPrefix}ytsearch | yts *texto*_
 *┃➤* _${usedPrefix}wiki | wikipedia *texto*_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Herramientas 🕷️* 〕
 *┃➤* _${usedPrefix}afk *motivo*_
 *┃➤* _${usedPrefix}acortar *url*_
 *┃➤* _${usedPrefix}calc *operacion math*_
 *┃➤* _${usedPrefix}del *respondre a mensaje del Bot*_
 *┃➤* _${usedPrefix}qrcode *texto*_
 *┃➤* _${usedPrefix}readmore *texto1|texto2*_
 *┃➤* _${usedPrefix}spamwa *numero|texto|cantidad*_
 *┃➤* _${usedPrefix}styletext *texto*_
 *┃➤* _${usedPrefix}traducir *texto*_
 *┃➤* _${usedPrefix}morse codificar *texto*_
 *┃➤* _${usedPrefix}morse decodificar *morse*_
 *┃➤* _${usedPrefix}encuesta | poll *Motivo*_
 *┃➤* _${usedPrefix}horario_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Rpg 🕷️* 〕
 *┃➤* _${usedPrefix}pase premium_
 *┃➤* _${usedPrefix}pass premium_
 *┃➤* _${usedPrefix}listapremium | listprem_
 *┃➤* _${usedPrefix}transfer *tipo cantidad @tag*_
 *┃➤* _${usedPrefix}dar *tipo cantidad @tag*_
 *┃➤* _${usedPrefix}enviar *tipo cantidad @tag*_
 *┃➤* _${usedPrefix}balance_
 *┃➤* _${usedPrefix}cartera | wallet_
 *┃➤* _${usedPrefix}experiencia | exp_
 *┃➤* _${usedPrefix}nivel | level | lvl_
 *┃➤* _${usedPrefix}rol | rango_
 *┃➤* _${usedPrefix}inventario | inventory_
 *┃➤* _${usedPrefix}aventura | adventure_
 *┃➤* _${usedPrefix}caza | cazar | hunt_
 *┃➤* _${usedPrefix}pescar | fishing_
 *┃➤* _${usedPrefix}animales_
 *┃➤* _${usedPrefix}alimentos_
 *┃➤* _${usedPrefix}curar | heal_
 *┃➤* _${usedPrefix}buy_
 *┃➤* _${usedPrefix}sell_
 *┃➤* _${usedPrefix}verificar | registrar_
 *┃➤* _${usedPrefix}perfil | profile_
 *┃➤* _${usedPrefix}myns_
 *┃➤* _${usedPrefix}unreg *numero de serie*_
 *┃➤* _${usedPrefix}minardiamantes | minargemas_
 *┃➤* _${usedPrefix}minarProyectoicoins | minarcoins_
 *┃➤* _${usedPrefix}minarexperiencia | minarexp_
 *┃➤* _${usedPrefix}minar *:* minar2 *:* minar3_
 *┃➤* _${usedPrefix}rob | robar 
 *┃➤* _${usedPrefix}crime
 *┃➤* _${usedPrefix}reclamar | regalo | claim_
 *┃➤* _${usedPrefix}cadahora | hourly_
 *┃➤* _${usedPrefix}cadasemana | semanal | weekly_
 *┃➤* _${usedPrefix}cadames | mes | monthly_
 *┃➤* _${usedPrefix}cofre | abrircofre | coffer_
 *┃➤* _${usedPrefix}trabajar | work_
 *┃➤* _${usedPrefix}fantasy | fy_
 *┃➤* _${usedPrefix}fantasyinfo | fyinfo_
 *┃➤* _${usedPrefix}fylista_
  ╰━━━━━━━━━━━━━

  ╭━〔 *🕷️ Proyecto Tops 🕷️* 〕
 *┃➤* _${usedPrefix}top_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Stickers 🕷️* 〕
 *┃➤* _${usedPrefix}sticker | s *imagen o video*_
 *┃➤* _${usedPrefix}sticker | s *url de tipo jpg*_
 *┃➤* _${usedPrefix}emojimix *😺+😆*_
 *┃➤* _${usedPrefix}scircle | círculo *imagen*_
 *┃➤* _${usedPrefix}semoji | emoji *tipo emoji*_
 *┃➤* _${usedPrefix}attp *texto*_
 *┃➤* _${usedPrefix}attp2 *texto*_
 *┃➤* _${usedPrefix}ttp *texto*_
 *┃➤* _${usedPrefix}ttp2 *texto*_
 *┃➤* _${usedPrefix}ttp3 *texto*_
 *┃➤* _${usedPrefix}ttp4 *texto*_
 *┃➤* _${usedPrefix}ttp5 *texto*_
 *┃➤* _${usedPrefix}ttp6 *texto*_
 *┃➤* _${usedPrefix}dado_
 *┃➤* _${usedPrefix}stickermarker *efecto : responder a imagen*_
 *┃➤* _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 *┃➤* _${usedPrefix}cs *:* cs2_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Stickers 2 🕷️* 〕
 *┃➤* _${usedPrefix}wm *packname|author*_
 *┃➤* _${usedPrefix}wm *texto1|texto2*_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Stickers 3🕷️* 〕
 *┃➤* _${usedPrefix}palmaditas | pat *@tag*_
 *┃➤* _${usedPrefix}bofetada | slap *@tag*_
 *┃➤* _${usedPrefix}golpear *@tag*_
 *┃➤* _${usedPrefix}besar | kiss *@tag*_
 *┃➤* _${usedPrefix}alimentar | food *@tag*_
  ╰━━━━━━━━━━━━━
  
  ╭━〔 *🕷️ Proyecto Owners 🕷️* 〕
 *┃➤* _${usedPrefix}join *enlace*_
 *┃➤* _${usedPrefix}unete *enlace*_
 *┃➤* _${usedPrefix}dardiamantes *cantidad*_
 *┃➤* _${usedPrefix}darxp *cantidad*_
 *┃➤* _${usedPrefix}darcoins *cantidad*_
 *┃➤* _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
 *┃➤* _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
 *┃➤* _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
 *┃➤* _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
 *┃➤* _${usedPrefix}idioma | language_
 *┃➤* _${usedPrefix}cajafuerte_
 *┃➤* _${usedPrefix}comunicar | broadcastall | bc *texto*_
 *┃➤* _${usedPrefix}broadcastchats | bcc *texto*_
 *┃➤* _${usedPrefix}comunicarpv *texto*_
 *┃➤* _${usedPrefix}broadcastgc *texto*_
 *┃➤* _${usedPrefix}comunicargrupos *texto*_
 *┃➤* _${usedPrefix}borrartmp | cleartmp_
 *┃➤* _${usedPrefix}delexp *@tag*_
 *┃➤* _${usedPrefix}delcoins *@tag*_
 *┃➤* _${usedPrefix}deldiamantes *@tag*_
 *┃➤* _${usedPrefix}reiniciar | restart_
 *┃➤* _${usedPrefix}actualizar | update_
 *┃➤* _${usedPrefix}addprem | +prem *@tag*_
 *┃➤* _${usedPrefix}delprem | -prem *@tag*_
 *┃➤* _${usedPrefix}listapremium | listprem_
 *┃➤* _${usedPrefix}añadirdiamantes *@tag cantidad*_
 *┃➤* _${usedPrefix}añadirxp *@tag cantidad*_
 *┃➤* _${usedPrefix}añadircoins *@tag cantidad*_
  ╰━━━━━━━━━━━━━`.trim()
    
const vi = ['https://telegra.ph/file/27e284cbab7da68fb6327.jpg',
'https://telegra.ph/file/17e79c78a63d066a60deb.jpg']
try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, contextInfo: fakeChannel2 })
//await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu,
contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363169294281316@newsletter',
newsletterName: "🕷️ 𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎 𝐗",
serverMessageId: -1
},
forwardingScore: 999,
externalAdReply: {
title: gt,
body: wm,
thumbnailUrl: img2,
sourceUrl: md,
mediaType: 1,
renderLargerThumbnail: false
}}})