const handler = async (m, {conn}) => {
  m.reply(global.Vs19);
};
handler.command = /^(Vs19)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs19 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 19 🇲🇽 | 20 🇨🇴
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
