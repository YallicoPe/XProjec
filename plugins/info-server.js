const handler = async (m, {conn}) => {
  m.reply(global.Servidor);
};
handler.command = /^(Servidor|Servidor)$/i;
export default handler;

global.Servidor = `
_Información del Host 🕷️_

*Host De Calidad Servidor - Proyecto X 🕷️*

*🖥️ Página :*
https://dashboard.infinitywa.xyz/

*👤 Contacto :*
https://wa.me/51926933818

*Servidor Ofrece Un Buen Server Y Sobre Todo Ofrece Servidor A Buenos Precios 🕷️*
`;
