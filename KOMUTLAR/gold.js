const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

        
const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Premium Komutları`)
    .addField('a!piyango', 'a!yakında')//ne kadar premium komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=678276271515369472&scope=bot&permissions=2146958847) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: 'premium',
  description: '',
  usage: ''
};

const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(' ```Acaba Kazanabilecek Mi?``` ').then(message => {
      var espriler = ['**Tebrikler! Piyangoyu Kazandınız!**','**Üzgünüm, Kaybettin.**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'piyango',
  description: 'Acaba Kazanabilecek Misin?',
  usage: 'piyango'
};

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
  permLevel: 0 
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
  name: 'premium', 
  description: "",
  usage: ''
};
   