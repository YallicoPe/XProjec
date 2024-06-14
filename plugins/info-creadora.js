const handler = async (m, {conn}) => {
  m.reply(global.Creador);
};
handler.command = /^(Creador|Vendedores)$/i;
export default handler;
global.Creador = `
*Creador De : Proyecto X 🕷️*

*👤Ig :* https://www.instagram.com/cristhofer_yallico
*🇵🇪 Contact :* https://wa.me/51926933818

*Proyecto X Vendedores :*

*👤 Ig :* https://www.instagram.com/sdjfskj
*🇵🇪 Contact :* https://wa.me/51977835251

*👤 Ig :* https://www.instagram.com/_dianita.dzn
*🇦🇷 Contact :* https://wa.me/5493751366296
`;
