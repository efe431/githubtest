const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = async (client, message, args) => {
   if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` Yetkisine Sahip Olmalısın!')
 var embed1 = new Discord.RichEmbed()
.setDescription(`**Hatalı Komut Kullanımı!** \nÖrnek: \`-antispam aç/-antispam kapat\``)
.setColor("RED")
.addField(`RealGiveWays Ultra Koruma Bot`)
 let seç = args.slice(' ').join
  if(seç[0]) return message.channel.send(embed1)

  if (args[0] == 'aç') {
    db.set(`antispamsystem.coderscode_${message.guild.id}`, 'aktif')
     message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Anti Spam Sistemi Aktif!`).setColor("RANDOM"));
    }
  
  
  if (args[0] == 'kapat') {
    db.set(`antispamsystem.coderscode_${message.guild.id}`, 'deaktif')
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Anti Spam Sistemi Deaktif!`).setColor("RANDOM"));
    }
  }



exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: ['anti-spam'],
  permLevel: 0
};

exports.help = {
  name: 'antispam',
};