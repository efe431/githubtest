const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  


message.channel.send(`Mr|Eagles Botun Sunucunuzu Böyle Koruması İçin YÖNETİCİ Yetkisi Olmalı Ve Sonrasında Kendiliğinden Saldırıları Önler.
https://www.youtube.com/channel/UChAFWOIF6OJjuD5d3FIimGg?view_as=subscriber`) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'spambotkorumasi',
  description: 'sayaç', 
  usage: 'sayaç'
};
