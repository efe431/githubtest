const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;

exports.run = function(client, msg, author) {
    let yazi = msg.mentions.members.first();
    if(!yazi){
      msg.channel.sendMessage('> Örnek Kullanım: '+prefix+'sik istediğiniz kişiyi siker.  ');
    }if(yazi){
      const Embed = new Discord.RichEmbed()
      .setTitle('AZMIŞLAR BEYA')
      .setDescription(`** <@${msg.author.id}> adlı kullanıcı ${yazi} adlı kullanıyla **sevişti** **`)
      .setColor('RANDOM')
      .setImage('https://giphy.com/gifs/sexy-kiss-couple-lNgXGnrif3gAM')
      msg.channel.sendMessage(Embed);
    } 
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'seviş',
  description: 'Bu komut ile istediğiniz kişiyi sikersiniz',
  usage: 'sik <kullanıcı>' 
  
}