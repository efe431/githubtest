const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime El Hareketi Çekeceğimi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana El Hareketi Çekti!**')
    .setImage(`https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiIlZSq6a3mAhXSDmMBHWdwARYQjRx6BAgBEAQ&url=https%3A%2F%2Ftenor.com%2Fview%2Fjahrein-twitch-gif-8103837&psig=AOvVaw08r8IIuQtloQ4Rr5oDeOF5&ust=1576161475093018`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'nahçek'
};