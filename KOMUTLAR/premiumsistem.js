const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Premium`, client.user.avatarURL) 

      .setThumbnail(client.user.avatarURL)
 .setDescription('!yardımkomut komut adı yazarak komutların ne işe yaradığını bulabilirsiniz')
     .addField('**Premium komutları nasıl kullanırsınız ')
      .addField('**Premium **','`a!reklam-isim-ban`,')
      .addField('**Premum **','`a!güvenlik`, ')
       .setFooter(``, client.user.avatarURL)
      .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'premium',
      usage: 'premium',
      description: 'premium komutlarını gösteir.',
};