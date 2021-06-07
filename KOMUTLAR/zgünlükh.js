
const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
  
    let cooldown = 1.728e+8, 
        amount = Math.floor(Math.random() * 10) + 20;      

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
        

        const embed = new Discord.RichEmbed()
        .setTitle('Hata!')
        .setColor('BLACK')
        .setDescription(`Günlük ödülünü zaten aldın!\nYeniden almana: **${timeObj.hours} saat ${timeObj.minutes} dakika**!`)
        message.channel.send(embed);
        return
    } else {
  
 

      
      
  
        const embed = new Discord.RichEmbed()
        .setTitle("Günlük ödülün!")
        .setDescription(`Günlük Ödülün: **${amount}** Puan`)
        .setColor('BLACK')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
      
        db.add(`para_${message.author.id}`, amount);

      
    }
     

    
    
    
    
    
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: 'günlük',
  description: 'Günlük ödül alırsınız.',
  usage: 'günlük',
   
};