const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if (!db.has(`premod_${message.guild.id}`) == true) {
    
      
      return message.channel.send(" Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını **kullanamazsınız**.")


    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send(':no_entry: Sistemi kullanabilmek için: `reklamisimban aç veya kapat`')

    if (args[0] == 'aç') {
        db.set(`reklamisimban_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam isim ban sistemi açıldı`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamisimban_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam isim ban sistemi kapatıldı`)

    }


}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-ban',],
    permLevel: 3
}

exports.help = {
    name: 'reklam-isim-ban',
    description: 'Herkese rol verir.',
    usage: 'herkese-rol-ver @rol / rol-ismi'
}