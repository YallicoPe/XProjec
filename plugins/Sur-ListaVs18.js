const handler = async (m, {conn}) => {
  m.reply(global.Vs18);
};
handler.command = /^(Vs18)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs18 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 18 🇵🇪 | 20 🇦🇷
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
