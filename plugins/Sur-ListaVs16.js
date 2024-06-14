const handler = async (m, {conn}) => {
  m.reply(global.Vs16);
};
handler.command = /^(Vs16)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs16 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 16 🇵🇪 | 18 🇦🇷
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
