const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/l1BgT1rs5YTOzvMHu/giphy.gif",
          color: 0xD96857,
		  description: "Nice Yaşlara Kanka, Mutlu Ömürler Dileirm. Bak bu da Hediyem :cake: "
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'doğumgünü',
  description: 'Arkadasini Bilir',
  usage: 'arkadaşın'
};