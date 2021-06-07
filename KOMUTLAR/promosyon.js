const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = (client, message, args) => {
    var pkod = args.slice(0).join(' ');
    let pkodu = db.fetch(`promosyonkodu_${pkod}`);
    let kullanıcı = db.fetch(`gold_${message.author.id}`);
    if (kullanıcı == "gold") return message.channel.send('**Bence promosyon kodu denemene gerek yok çünkü zaten gold üyesin :D**')
    if (pkodu == "acik"){
     db.delete(`promosyonkodu_${pkod}`)
     db.set(`gold_${message.author.id}`, 'gold')
     message.channel.send('**SINIRSIZ** promosyon kodu ile gold üye kazandın!')
  client.guilds.get("647151510349676545").members.get(`${message.author.id}`).addRole('647149530889846828')
     db.set(`promosyonkodu_${pkod}`, "mervem")
    }
    if (pkodu == "mervemm"){
    message.channel.send ('**Bu promosyon kodu daha önce kullanılmış!**')
    }
  if (!pkod) return message.channel.send('Lütfen bir promosyon kodu girin.')
    if (pkodu == undefined) return message.channel.send('Böyle bir promosyon kodu bulunamadı.')
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kodkullan',
  description: '',
  usage: 'kodkullan'
};
   