const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)

let arguman = args[0];

if (!arguman) return message.channel.send(`Lütfen \`aç\` veya \`kapat\` **yazın.**`)

if (arguman === "aç") {
if (db.has(`botkoruma_${message.guild.id}`) === true) {
message.channel.send(`**İşlem başarısız!** Sistem zaten **aktif!**`)
}
if (db.has(`botkoruma_${message.guild.id}`) === false) {
db.set(`botkoruma_${message.guild.id}`, "Aktif")

message.channel.send(`Bot koruma sistemi başarıyla **açıldı!** Sunucunuza bot girişi **kapatılmıştır!**`)
}
}

if (arguman === "kapat") {
if (db.has(`botkoruma_${message.guild.id}`) === true) {
db.delete(`botkoruma_${message.guild.id}`)

message.channel.send(`Bot koruma sistemi başarıyla **kapatıldı!** Sunucunuza bot girişi **açılmıştır!**`)
}
if (db.has(`botkoruma_${message.guild.id}`) === false) {
message.channel.send(`**İşlem başarısız!** Sistem zaten **deaktif!**`)
}
}
}
exports.conf = {
  guildOnly : true,
  enabled : false,
  aliases : ["sunucu-koruma"],
  permLevel : 3
}
exports.help = {
  name : "anti-raid",
  description : "Sunucuyu botlara karşı koruyan sistem. (Kullanmanızı öneririz)",
  usage : "sunucu-koruma"
}
  }

    }
      
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'anti-raid', 
  description: "",
  usage: ''
};
   