const Discord = require('discord.js');
const db = require('quick.db');
const shorten = require('isgd');

exports.run = (client, message, args, tools, guild) => {

    message.delete();
    if (!args[0]) return message.channel.send({embed:{
    title:(`Kullanım İçin /kısalt link `)
    }})

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('**Lütfen Doğru URL Girin**');

            message.channel.send(`**<${res}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`**<${res}>**`);

            message.channel.send(`**<${res}>**`);
        })
    }

};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'kısalt',
 description: 'İstediğiniz URL yi Kısaltır. ',
 usage: 'kısalt'
};