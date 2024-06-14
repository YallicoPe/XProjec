const handler = async (m, {conn}) => {
  m.reply(global.Donar);
};
handler.command = /^(Donar|Apoyar)$/i;
export default handler;

global.Donar = `
*Si Deseas Apoyar Al Staff De Proyecto X 🕷️*

*Yape , Paypal*

*Yape :* +51 936 994 155
*Paypal :* https://www.paypal.com/paypalme/PinguiService
`;