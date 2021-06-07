const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async(client, message, args) => {

      let sebep = args.slice(0).join(" ");
      if (!sebep) return message.reply("AFK olma nedenini yazmalısın!");
  let user = message.member

      db.set(`afks_${message.author.id}`, sebep)
    user.setNickname(`[AFK] ` + message.author.username)

        message.reply(`Artık **${sebep}** sebebi ile **AFK** modundasın!`)
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};
  }

    }
      
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk', 
  description: "",
  usage: ''
};
   