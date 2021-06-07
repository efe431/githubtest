const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var ilgincsöz = [
        "Balıklar Suda Yaşar.",
"Mavi Gözler Etrafı Mavi Görmez.",
"Maymunların En Çok Sevdiği Yiyecek Muzdur.",
        //"Kutay Abinin Keline Sokulmuştur.",
//"Kutay Abinin Keline Çok  Sokulmuştur."
"Karanlıkta Etrafı Görmek Zorlaşır.",
"Ayakkabı Ayaga Giymek İçin Tasarlanmıştır",
"Kaldırım insanların üstünde yürümesi için vardır",
"155'i aradığınız anda polis gelmez.",
"Ufuklar ufukta gözükür.",
"Lale devrinde Osmanlıda yaşayanlar lale değildir.",
"Sakatat sakat attan yapılmaz.",
"Newton yerçekimini bulmadan önce insanlar uçmuyordu.",
"Osmanlı ve Bizansın yıkılma sebebi deprem degildir.",
"Tavuk yumurtasının içinden Tavuk çıkma ihtimali At çıkmasından fazladır.",
"Deniz anaları denizin anası degildir.",
"Osmanlıda üretilen para ile yazı tura atarsanız yazı gelme ihtimali %50 dir.",
"Balık yerseniz ve su içerseniz midenizde Balık canlanmaz.",
"Köpekbalıkları havlamaz.",
"Erkekler hamile kalmaz.",
"Yeni yapılmış resimler nevresim değildir.",
"Bilgisayar fareleri canlı değildir.",
"Eğer birşeyi bulmak istiyorsanız onu ilk önce aramanız gerekmektedir.",
"Baykuşlar vedalaşırken baykuş demezler",
"Denizaltının bi yüksek versiyonu Denizyedi değildir.",
"ineklerin sevmediği element azot değildir.",
"Çanakkaleyi boyu yetmedikleri için geçemediler.",
"Sevgilisi olmayanlar bulaşık makinesi almazlar.",
"Telefonu Albert Einstein İcat Etmemiştir.",
"Antik Mısır dönemindeki insanlar antik degildir.",
"Ecel ömür bittiginde gelir.",
"Kuzey Koredeki ve Güney Koredeki insanlar aslında aynı atadan gelmektedir.",
"Overwatch da Escort The Payload Sözünde Bahsedilen Şey Oruspu Değildir.",
"CS:GO'daki GO gitmek anlamına gelmez.",
"Tab2 Lafı Tabtwo diye okunmaz."

        
    ]
    var ilgincsöz = ilgincsöz[Math.floor(Math.random(1) * ilgincsöz.length)]
    const ilgincsözembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`İlginç Bilgi`, message.author.avatarURL)
    .setFooter(`${message.author.username} bir ilginç bilgi öğrendi.`)
  .setDescription(`${ilgincsöz}`)
    return message.channel.sendEmbed(ilgincsözembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ib","ilgincbilgi"],
  permLevel: 0
};

exports.help = {
  name: 'ilginçbilgi',
  description: 'Çok ilginç bilgiler!',
  usage: 'ilginçbilgi'
}
   