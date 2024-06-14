const handler = async (m, {conn}) => {
  m.reply(global.Vs13);
};
handler.command = /^(Vs13)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs13 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 13 🇲🇽 |  14🇨🇴
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
