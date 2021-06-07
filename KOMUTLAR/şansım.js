const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = [' Sonucun : **EZZZ :D=`%25`** !', 
                 ' Sonucun : **AZ KALDI DSOTUM:smile: `%75`** !', 
                 ' Sonucun : **Eh,yani 1%* !', 
                 ' Sonucun : NE DİYİM **%000** !',
                 ' Sonucun : **cenabeT :nauseated_face: =`%31`** !', 
                 ' Sonucun : **Çok iyi ! :boxing_glove: =`%100`** !', 
                 'Sonucun : **Daha iyisini yapabilirsin! :muscle: =`%102`** !',
                 ' Sonucun : **Daha iyisini yapabilirsin![ne kadar daha `iyi` olcak] :muscle: = `%99999`** !', 
                 'Sonucun : **Niye 100 değil :D=9`99`** !', 
                 ' Sonucun : **sg oha :crown:=`%99`*`* !', 
                 'Sonucun : **Yine iyisin :white_check_mark: =`%60``** !', 
                 ' Sonucun : **batırdın :smile: =`%10`** !'
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor(2828)
 .setDescription(":sparkles:" + cevap)
 return  message.channel.sendEmbed(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks-makinası'],
   permLevel: 0
 };

 exports.help = {
   name: 'şansım',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}