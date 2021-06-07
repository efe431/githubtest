const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

  if (!db.fetch(`goldpuan_${message.author.id}`)) {
    const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("MREASGLES", client.user.avatarURL)
.setColor("BLUE")
.setTitle("MREAGLES")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=688666708931641359&scope=bot&permissions=2146958847")

 .setDescription(`
${message.author}, senin puanın **0**
daha fazla puan kazanmak için !p-menü yazabilirsin.
`)
 .addField("!p-market | !p-menu", `
Puanınızı ve market menüsünü gösterir.

`)
 .addField("a!p-topaz", `
5.000 puan karşılığında topaz kasa açarsınız.
İçinden rastgele 1-3 gün arası gold üye çıkar.
`)
 .addField("!ap-invite", `
10.000 puan karşılığı invite kasa açarsınız.
İçinden rastgele 1-10 arası invite çıkar.
`)
  .addField("a!p-ucuz", `
1.000 puan karşılığı invite kasa açarsınız.
İçinden rastgele 1-10 arası Vip  çıkar.
`)
   .addField("a!p-100k", `
100000 puan karşılığı invite kasa açarsınız.
İçinden rastgele 100-1000 arası GOLD ÜYE + 15 İNVİTE  çıkar.
`)
    .addField("a!p-yetki", `
50000 puan karşılığı invite kasa açarsınız.
İçinden rastgele Yetki puanı çıkar  çıkar.
`)
   .addField("a!p-sınırsız", `
75000 puan karşılığı invite kasa açarsınız.
İçinden rastgele SINIRISZ-SINIRSIZ arası Vip  çıkar.
`)
 
 
 .addField("a!p-yakut", `
10.000 puan karşılığı yakut kasa açarsınız.
İçinden rastgele 1-10 gün arası gold üye çıkar.
`)
 
 .addField("a!p-garnet", `
45.000 puan karşılığı garnet kasa açarsınız.
İçinden rastgele (10-45) gün arası gold üye çıkar.
`)
 .setFooter("© Mcadventuretime.com", client.user.avatarURL)
 
 return message.channel.send(Embed)
  }
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("MREagles", client.user.avatarURL)
.setColor("BLUE")
.setTitle("MREagles BOT")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")

 .setDescription(`
${message.author}, senin puanın **${db.fetch(`goldpuan_${message.author.id}`)}**
daha fazla puan kazanmak için !p-menü yazabilirsin.
`)
 .addField("!p-market | !p-menu", `
Puanınızı ve market menüsünü gösterir.

`)
 .addField("a!p-topaz", `
5.000 puan karşılığında topaz kasa açarsınız.
İçinden rastgele 1-3 gün arası gold üye çıkar.
`)
 .addField("!ap-invite", `
10.000 puan karşılığı invite kasa açarsınız.
İçinden rastgele 1-10 arası invite çıkar.
`)
  .addField("a!p-ucuz", `
1.000 puan karşılığı invite kasa açarsınız.
İçinden rastgele 1-10 arası Vip  çıkar.
`)
   .addField("a!p-100k", `
100000 puan karşılığı invite kasa açarsınız.
İçinden rastgele 100-1000 arası GOLD ÜYE + 15 İNVİTE  çıkar.
`)
    .addField("a!p-yetki", `
50000 puan karşılığı invite kasa açarsınız.
İçinden rastgele Yetki puanı çıkar  çıkar.
`)
   .addField("a!p-sınırsız", `
75000 puan karşılığı invite kasa açarsınız.
İçinden rastgele SINIRISZ-SINIRSIZ arası Vip  çıkar.
`)
 
 
 .addField("a!p-yakut", `
10.000 puan karşılığı yakut kasa açarsınız.
İçinden rastgele 1-10 gün arası gold üye çıkar.
`)
 
 .addField("a!p-garnet", `
45.000 puan karşılığı garnet kasa açarsınız.
İçinden rastgele (10-45) gün arası gold üye çıkar.
`)
 .setFooter("© Mcadventuretime.com", client.user.avatarURL)
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pmarket","pmenü","pmenu","p-menu", "p-menü"],
  permLevel: 0
};

module.exports.help = {
  name: 'p-market',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
