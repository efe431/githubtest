
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek i�in gerekli yetkiye sahip de�ilsiniz!`)
  
  //let krma = db.get(`botkoruma_${message.guild.id}`)
  db.fetch(`botkoruma_${message.guild.id}`).then(krma => {
    let ackapat = args[0];
    if(ackapat === "a�") {
      if(!krma) {
        db.set(`botkoruma_${message.guild.id}`, "botkorumaaktifysfd�zolar�namk")
        message.channel.send(`:white_check_mark: Bot korumas� ba�ar�l� bir �ekilde \`aktifle�tirildi\`.`)
      } else {
        if(krma === "botkorumaaktifysfd�zolar�namk") {
          return message.channel.send(`:warning: Bot koruma durumunuz �u anda \`aktif\` e�er deaktifle�tirmek istiyorsan�z;\n\`${ayarlar.prefix}bot-koruma kapat\` �eklinde bot koruma durumunu kapatabilirsiniz.`)
        }
      }
    } else if(ackapat === "kapat") {
      if(krma === "botkorumaaktifysfd�zolar�namk") {
        db.delete(`botkoruma_${message.guild.id}`);
        message.channel.send(`:white_check_mark: Bot korumas� ba�ar�l� bir �ekilde \`deaktifle�tirildi\`.`)
      } else {
        if(!krma) {
          return message.channel.send(`:warning: Bot koruma durumunuz �u anda \`deaktif\` e�er aktifle�tirmek istiyorsan�z;\n\`${ayarlar.prefix}bot-koruma a�\` �eklinde bot koruma durumunu aktifle�tirebilirsiniz.`)
        }
      }
    } else {
      return message.channel.send(`Do�ru kullan�m; \n \`${ayarlar.prefix}bot-koruma a�/kapat\``)
    }
  })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['botkoruma'],
    permLevel: 3
}

exports.help = {
    name: 'bot-koruma',
    description: 'Sunucuya giren botlar�n banlan�p banlanmayaca��na karar verirsiniz.',
    usage: 'bot-koruma a�/kapat'
}