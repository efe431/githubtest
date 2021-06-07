const db = require('quick.db')

const Discord = require('discord.js')

const client = new Discord.Client();

const ayarlar = require("../ayarlar.json")



exports.run = async (client, message, args) => {

if(message.author.id != ayarlar.sahip) { return message.channel.send("❌ Sahibimin Komutunu Kullanamazsın")}



  let nesne = args[0]

  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')



  db.set(`gold_${nesne}`, 'gold')



  message.channel.send(`\`${nesne}\` IDli kullanıcı artık gold üye oldu!`)



}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 4

};

exports.help = {

  name: 'goldyap',

  description: 'Gold üye yaparsınız',

  usage: 'goldyap <ID>'

};