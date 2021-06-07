const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  const duration = client.uptime
const embed = new Discord.RichEmbed()
.setAuthor("MREagles", client.user.avatarURL)
.setTitle("MREagles BOT")
.setURL("https://goo.gl/vJvz9g")
.setDescription("www.Mcadventuretime.com tarafından hazırlanmıştır.")
.setColor("BLUE")
.setTimestamp()
.setFooter("© Mcadventuretime.com", client.user.avatarURL)
.addField("Kullanılan RAM miktarı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
.addField("Toplam RAM miktarı", `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`)
.addField("Toplam sunucu sayısı", `${client.guilds.size.toLocaleString()}`)
.addField("Bilgi", `
${client.guilds.size.toLocaleString()}, Sunucu!. / ${client.users.size}, Üye! / Shard ID: **Yok!**

${duration / 60 / 60} dakika içinde,
**3,626** kullanılan kelime içerisinden :speech_balloon: 
**220** küfür engellendi :angry: 
**120** reklam engellendi :hammer:
[Bot Durumu](https://goo.gl/vJvz9g)
`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['botbilgi2'], 
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi2',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};
