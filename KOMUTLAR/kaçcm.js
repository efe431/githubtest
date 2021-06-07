const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = [' Sonucun : **azmış be ben olsam yalamam =`0.001cm`** !', 
                 ' Sonucun : **ama tutarım azmış be ben olsam yalamam  :D=`0.50cm`** !', 
                 ' Sonucun : **çekerim ama yalamam :(  =`1cm`** !', 
                 ' Sonucun : **çekerim yalarım içime almam k.b büyüt=`1.50cm`** !',
                 ' Sonucun : **AZDIR BENI BE=`2cm`** !',
                 ' Sonucun : **içime alırım ama açıtmaz=`3`** !',
                 ' Sonucun : **çekerimde yalarımda içimede alırım ama kısa süsrer=`5`** !',
                 ' Sonucun : **amıma girsnee yalatsana bana onu bebeğim =`7`** !',
                 ' Sonucun : **üstünde zıplarım lan=`15`** !',
                 ' Sonucun : **7/24 senle seks te olucam herşeyi yaparım senle=`25`** !',
                 ' Sonucun : ** naptın olm=`31`** !',
                 ' Sonucun : ** sen direk=`1999`** !',
                 
                 
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor(2828)
 .setDescription(":eggplant:" + cevap)
 return  message.channel.sendEmbed(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks-makinası'],
   permLevel: 0
 };

 exports.help = {
   name: 'kaçcm',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}