
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
let dil = await db.fetch(`dil_${message.guild.id}`)
  
if(!dil) { // DİL AYARLANMAMIŞ ( BOTUNUZ EĞER DİL AYARLANMADIYSA HANGİ DİLİ KULLANMASINI İSTİYORSANIZ. )
                    if(!args[0]) {
  let embed = new Discord.RichEmbed()
  .setDescription('Botu kullanmak için lütfen dil seçeneğini belirleyiniz.')
  .setColor('RANDOM')
  message.channel.send(embed).then(s => s.react())
  }
  }
 if(dil === "TR") { // TÜRKÇE DİL
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`[REKLAM YASAK HÜ](REKLAM YASAK HÜ)`);
    message.channel.send(embed);
  });
 }
  
   if(dil === "EN") { // TÜRKÇE DİL
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`[NO ADS](NOADS)`);
    message.channel.send(embed);
  });
 }
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['invitation'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davetini Verir.',
  usage: 'davet'
};