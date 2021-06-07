const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

  if (!await db.fetch(`goldpuan_${message.author.id}`)) {
    
 return message.reply("Puanınız: 0 " + client.emojis.get("678229419579539487"))
  }
 return message.reply("Puanınız: " + `${db.fetch(`goldpuan_${message.author.id}`)} ` +client.emojis.get("678229419579539487"))
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kredim"],
  permLevel: 0
};

module.exports.help = {
  name: 'puanım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
