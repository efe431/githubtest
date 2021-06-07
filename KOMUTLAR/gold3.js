
   const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

const Discord = require('discord.js');

exports.run = function (client, message, args) {a
    let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Lütfen birisini etiketlermisin...')
    let yazi = args[1]
    if (!yazi) return message.reply('Lütfen mesajını yazınız.')
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
kategori: "eğlence"
};

exports.help = {
    name: 'fakemesaj',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};
};
   
  
};

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fakemesaj', 
  description: "",
  usage: ''
};
   