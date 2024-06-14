const handler = async (m, {conn}) => {
  m.reply(global.Vs21);
};
handler.command = /^(Vs21)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs21 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 21 🇲🇽 | 22 🇨🇴
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
