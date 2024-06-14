const handler = async (m, {conn}) => {
  m.reply(global.Vs17);
};
handler.command = /^(Vs17)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs17 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 17 🇲🇽 | 18 🇨🇴
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
