
   const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let guild = message.guild;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  guild.createChannel(`Toplam Kullanıcı : ${guild.memberCount}`, 'voice');
  guild.createChannel(`Üye Sayısı : ${guild.members.filter(m => !m.user.bot).size}`, 'voice');
  guild.createChannel(`Bot Sayısı : ${guild.members.filter(m => m.user.bot).size}`, 'voice');

  message.channel.send(`:white_check_mark:  Sunucudaki üye sayısını kanallarda gösterecek bir sistem kuruldu.`);
}; 
//edited by dbe
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['panelkur'],
  permLevel: 3
};

exports.help = {
  name: 'panelkur',
  description: 'Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.',
  usage: 'panelkur'
};
   
  
};

};
  }

    


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'panelkur', 
  description: "",
  usage: ''
};
   