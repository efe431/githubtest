const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Premium Komutları`)
    .addField('a!piyango', 'piyango oynarsın')
    .addField('a!afk', 'afk olursun')
     .addField('a!panelkur', 'otopanel kurur')
      .addField('a!fakemesaj', 'fake mesaj atarsın')  
  .addField('a!oylama', 'atarsın') 
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=678276271515369472&scope=bot&permissions=2146958847) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: 'premium',
  description: '',
  usage: ''
};