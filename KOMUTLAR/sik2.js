const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//
 const Embed = new Discord.RichEmbed()
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.noPerms(message, "MANAGE_MESSAGES");

  if(!args[0]) return message.reply(" En Az \`1 - 100000000\`  KAÇ KİŞİ SİKİCEN OLM YAZ");

    message.channel.send(`> Toplam **${args[0]}** KİŞİ SİKTİ HELAL BE KOCA YARRAKLI :) <a:6638_KawaiiBunny_Recolored:650657259063607296>> :plant:`)
  };


module.exports.help = {
  name: "sil"
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 0,
};

exports.help = {
  name: 'sik2',
  description: '',
  usage: 'temizle',
}