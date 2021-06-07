const Discord = require('discord.js');


exports.run = function(client, message) {

  let giveEmbed = new Discord.RichEmbed()
  .settitle('MARKETSS')
  .addfield('MARKETTTSS ')
  .addfield('PARA SİSTEMİ İLE NE ALINIR')
  .addfield('gold üye **50 puan**')
  .addfield('istediğin bir kodu bota ekletme **50 puan**')
  .addfield('sunucumuzda VİP **20 puan**')
  .addfield('Botumuzun alt yapısı **1000 Puan**')
  .addfield('yakında KASALAR ')
};

exports.conf = {
  enabled: true, //komut açık kapalı
  guildOnly: false, //herkese kullanır
  aliases: ['markets'], //komutun farklı kullanımları
  permLevel: 0 //kimler kullancağını belirtir 
};

exports.help = {
  name: 'market', //adını belirtin (kullanmak için gereken komut) Örneğin otorol
  description: 'sunucu için en iyi kodları gösterir', //komutun açıklaması
  usage: 'a!sunucu-ayarları' //komutun kullanım şekli (örneğin x!otorol <@rol> <#kanal>)
};


