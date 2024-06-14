const handler = async (m, {conn}) => {
  m.reply(global.Vs22);
};
handler.command = /^(Vs22)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs22 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 22 🇵🇪 | 00 🇦🇷
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
