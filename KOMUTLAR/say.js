const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, prefix, ayar, emoji) => {
  let erkekRolü = "688668757584773165";
  let kızRolü = "688668756523614220";
  let ekipRolü = "688673099465359404";
  const embeddd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
     
    .setDescription(
      `Sunucu Toplam Üye: ${message.guild.memberCount} \nToplam Aktif Üye: ${
        message.guild.members.filter(b => b.presence.status !== "offline").size
      } \nErkek Üye: ${
        message.guild.roles.get(erkekRolü).members.size
      } \nKız Üye: ${message.guild.roles.get(kızRolü).members.size} \nTag alanlar: ${
        message.guild.roles.get(ekipRolü).members.size
      } \nAktif Erkek Üye: ${
        message.guild.roles
          .get(erkekRolü)
          .members.filter(x => x.presence.status !== "offline").size
      }  \nAktif Kız Üye: ${
        message.guild.roles
          .get(kızRolü)
          .members.filter(x => x.presence.status !== "offline").size
      } \nAktif Tag alanlar: ${
        message.guild.roles
          .get(ekipRolü)
          .members.filter(x => x.presence.status !== "offline").size
      } \nSes Kanalında Bulunan: ${
        message.guild.members.filter(a => a.voiceChannel).size
   
      }`
    );
  message.channel.send(embeddd);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sayım yapar.",
  usage: "say",
  kategori: "kullanıcı"
};
