const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `🕷️ 𝐏𝐑𝐎𝐘𝐄𝐂𝐓𝐎 𝐗 𝐈𝐍𝐕𝐎𝐂𝐀 𝐀 𝐓𝐎𝐃𝐎𝐒 🕷️\n\n❏ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒  :  *${participants.length}* ${oi}\n\n`;
  for (const mem of participants) {
    teks += `🕷️ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n𝐀𝐍𝐎𝐓𝐀𝐓𝐄 𝐏𝐋𝐀𝐍𝐓𝐈𝐓𝐀 ღ`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;
