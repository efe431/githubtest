const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;

exports.run = function(client, msg, author) {
    let yazi = msg.mentions.members.first();
    if(!yazi){
      msg.channel.sendMessage('> Örnek Kullanım: '+prefix+'sik istediğiniz kişiyi siker.  ');
    }if(yazi){
      const Embed = new Discord.RichEmbed()
      .setTitle('Pompe Var')
      .setDescription(`Vouvv,** <@${msg.author.id}> adlı kullanıcı ${yazi} adlı kullanıyı sikti  **`)
      .setColor('RANDOM')
      .setImage('https://tenor.com/view/twerking-tom-yasss-twerking-gif-13535633')
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
  name: 'sik',
  description: 'Bu komut ile istediğiniz kişiyi sikersiniz',
  usage: 'sik <kullanıcı>' 
  
}