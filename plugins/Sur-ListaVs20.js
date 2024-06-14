const handler = async (m, {conn}) => {
  m.reply(global.Vs20);
};
handler.command = /^(Vs20)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs20 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 20 🇵🇪 | 22 🇦🇷
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
