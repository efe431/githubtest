const Discord = require('discord.js') ///modulumuzu tanittik
const db = require('quick.db')
exports.run = (client,message) => { ///bot oldugunu ve mesaji tanittik
  let x = message.member
  let devtr;
  let logchnl = "693819326272110622" //log kanal id
  let zmorcy = "688690594087829504" //verilecek rol id
 

  
  if(!x.roles.has(zmorcy)) {

  
  
  
  
  message.member.addRole(zmorcy)
  const embed = new Discord.RichEmbed()
  .setTitle(':partying_face: | Js Rolü Verildi')
  .setColor('GREEN')
  .setFooter( message.author.username , message.author.avatarURL )
  .setThumbnail( message.author.avatarURL )
  .setDescription(` 🔥 | Tebrikler \n\n ⚡ | **Javascript** rolünü ${message.author} kişisine verdim.`)
 message.channel.send(`🌙 | **Javascript** rolünü sana verdim.`)

  client.channels.get(logchnl).send(devtr)

return

}
  if(x.roles.has(zmorcy)) {

    
    
    
    message.member.removeRole(zmorcy)
  const embed = new Discord.RichEmbed()
  .setTitle(' :x: | Js Rolü Alındı ')
  .setColor('RED')
  .setFooter( message.author.username , message.author.avatarURL )
  .setThumbnail( message.author.avatarURL )
  .setDescription( ` 🔥 | İşlem başarılı. \n\n 🌙 | **Javascript** rolünü ${message.author} kişisinden aldım`)
   message.channel.send(`❌ | **Javascript** rolünü senden aldım.`)

  
  client.channels.get(logchnl).send(devtr)
  return
  }

  
  
  
  






}

exports.conf = {
enabled: true, ///kodu aktif ettik///
guildOnly: false, /// sunucuya özel olmadıgını söyledik ///
aliases: [], ///başka bir kullanım eklemedik 
permlevel: 0 ///tüm herkes kullanabilir dedik

}
exports.help =
{
name : "js",
despricton : "açıklama",
usage : "js"
}