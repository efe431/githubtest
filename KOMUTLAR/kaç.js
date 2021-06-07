const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)
  try {
    
    const embed = new Discord.RichEmbed()
    .setTitle(`MR|AKALS- Komut Sayısı`)
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!** ')
    .setColor("AEDD13")
    .setThumbnail("https://cdn.discordapp.com/attachments/670924272683974657/671276907370774548/giphy_13.gif")
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'kaç-komut-var',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'uşağum onu sen bileceğeeeeeeeeeen'
};
