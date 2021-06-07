const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

  let sayfalar = [`**Prefix: a!**\nKolay yardım menüsü\nAnlık Komut Sayımız: ${client.commands.size}`,`**Ping**\nping` ,'**Yetkili Komutlar**\na!bb-kanal : ÇIKIŞ KANAL\na!hg-kanal : giriş kanal \na!koruma koruma sistemi \na!çekiliş \ndavet-takip-kanal \n güvenlik  \n koruma-sistemi \n komutara \n küfür-engelle \n rekalm-engelleme \noto-bot-silici \n Oto-cevap \n oto-rol \n ototag \n panel-kur \n kurulum \n anti-spam   '+ client.commands.filter(cmd => exports.help.category === 'admin').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"), '**Yardım Komutları**\n üyedurum \ntop10 \nsunucubilgi \nbotbilgi\nbotbilgi2'+client.commands.filter(cmd => exports.help.category === 'util').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),'**Resim Komutları**\nBÖYLE KODMU VAR AQ'+client.commands.filter(cmd => exports.help.category === 'photo').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),'**Eğlence Komutları**\na!yardım prda var üşendim kanka'+ client.commands.filter(cmd => exports.help.category === 'fun').map(cmd => '\ ' + exports.help.name + '\ ').join("\n"),'**Müzik**\nmüzik','**NSFW :x:**\n'+ client.commands.filter(cmd => exports.help.category === 'nsfw').map(cmd => '\ ' + exports.help.name + '\ ').join("\n")]; 
  let sayfa = 1;

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`)
    .setDescription(sayfalar[sayfa-1])

  message.channel.send(embed).then(msg => {

    msg.react('⏪').then( r => {
      msg.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '��' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter);
      const forwards = msg.createReactionCollector(forwardsFilter);


      backwards.on('collect', r => {
        if (sayfa === 1) return;
        sayfa--;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

      forwards.on('collect', r => {
        if (sayfa === sayfalar.length) return;
        sayfa++;
        embed.setDescription(sayfalar[sayfa-1]);
        embed.setFooter(`Sayfa ${sayfa} - ${sayfalar.length}`);
        msg.edit(embed)
      })

    })

  })
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gelişmekteyardım","demoyardım","h","dy"],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'yardım2',
  description: 'Gelişmiş Sayfalı Yardım.',
  usage: 'yardım'
};
