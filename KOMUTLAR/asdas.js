const Discord = require('discord.js')
//CODERS CODE İS HERE

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()//CODERS CODE İS HERE
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '**Çekiliş** adlı komutu özel mesajlarda kullanamazsın.')}
    let mesaj = args.slice(0).join(' ');
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Yetersiz **yetki!**');
    if (mesaj.length < 1) return message.reply('Ödülü **yazmadın!** ');
    message.delete();
    const embed = new Discord.RichEmbed()
    .addField('Sunucu İsmi', message.guild.name , true)    
    .setColor("RANDOM")//CODERS CODE İS HERE
    .addField('Ödül', mesaj)
    .addField("Çekilişi Başlatan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField('Çekilişi Kazanan', `<@${message.guild.members.random().id}>`)
    .setThumbnail(message.guild.iconURL)
    return message.channel.sendEmbed(embed);
  }//CODERS CODE İS HERE
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: 'çekiliş-yap',
    description: 'CODERS CODE İS HERE',
    usage: 'çekiliş-yap'
  };