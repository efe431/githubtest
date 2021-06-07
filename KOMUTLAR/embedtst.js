const Discord = require('discord.js');

const client = new Discord.Client();
client.on('message', message => {
    if (message.content === 'how to embed') {
           const embed = new Discord.RichEmbed()

.setTitle('Başlık')
.setColor('Random')
.setDescription('Yazı')
.Channel.send(embed);
}
});
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: "sa",
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
};