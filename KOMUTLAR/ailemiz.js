const Discord = require("discord.js")
exports.run = (bot, message) => {
  message.channel.sendMessage(`> Örnek Kullanım: a!ailemiz .   `);
  let yazi = message.mentions.members.first();
  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id)
      embed.setTitle('Ailemiz')
      embed.setDescription(`Büyük bir ailedeyiz !. Ailemde **${bot.guilds.size}** kadar sunucu var ! **` + guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** Adet Üyeye Hizmet Veriyor!`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: "ailemiz",
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
};