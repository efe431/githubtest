const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("RealGiveWays ! \n")
 
  .setColor("RANDOM")
  .addField('**1.** Sunucunuz En fazla 200+ kişilik olmalıdır')
  .addField('**2.** %100 KALICILIK OLUCAKTIR silmek yok')
  .addField('**3.** Güvenilir şekilde olucktır [yalan nitro sunucuları alınmıycaktır]')
  .addField('**YUKARDAKI KURALLARA UYULMADIGI TAKDIRDE PARTNERLIK IPTAL OLUR!!!**')
  .setFooter("♥ 2020 ♥ RealGiveWays ♥", " ")
  
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'partnerlik-şartları',
  description: 'Botun pingini gösterir.',
  usage: 'partnerlik-şartları'
};