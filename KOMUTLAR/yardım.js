const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**a!Yardım** ile yardım alabilirsiniz.\n örnek komut kullanımı: **a!küfür-engelle**.\nbotu davet etmek için **a!davet**')
      .addField('** Komutlar (13)**', `herkesin kullanabileceği standart komutlar. \n` +  '`a!bilgi`, `a!davet`, `a!gold-üye`, `a!webpanel`, `a!sunucubilgi`, `a!kullanıcı-bilgi`, `a!balıktut`, `a!seviye`, `a!yardım`, `a!erkek`, `a!doğumgünü`, `a!günlük-kredi`,`a!yılbaşı`,`a!ailemiz`')
      .addField('** Eğlence (9)**',   `herkes için kullanılabilecek eğlence komutları. \n` + '`a!kralol`, `a!nahçek`, `a!öp`, `a!adamol`, `a!saat`, `a!adamasmaca`, `a!zuladesteaç`, `a!csgo-kasa-açma`, `a!şansım` , `a!hackle , `a!kapaklaflar , `a!olay` , `a!kodkullan` , `a!sigara` , `a!sik`, `a!sik2`')
      .addField('** Moderasyon (22)**',`yetkililer için moderasyon komutları bölüm . \n` +  '`a!küfür-engelle`, `a!reklam-engel`, `a!reklamisimban`, `a!reklamkick`,`a!reklamtaraması`,`a!otorol-yardım`,`a!ototag`,`a!sayaç`,`a!sayaç-ayarla`,`a!sil`,`a!ultra-sohbet-temizleyici`,`a!eklam-engelleme` ,`a!koruma-sistemi` ,`a!kayıt-kanal-ayarla`,`a!hg-kanal`,`a!güvenlik`,`a!giriş-izni`,`a!çekiliş-yap`,`a!disco-rol-ayarla`,`a!davet-takip-kanal`,')
     .addField('** Moderasyon2 (13)**',`yetkililer için moderasyon komutları bölüm . \n` + '`a!bb-kanal`,`a!ayar`,`a!duyur`,`a!capslock-filtresi`,`a!partnerlik-şartları`,`a!yavaşmod`,`a!prefix`,`a!Oto-Cevap`,`a!koruma`,`a!csgo-kasa-açma`,`a!üyedurum`,`a!log-ayarla`,`a!emojiler`,`a!kaç-komut-var`, `a!doğrulukcesaret` ')
     .addField('** YENİLİKLER (9**',   `herkes için kullanılabilecek yenilikler komutları. \n` + '`a!premium`, `a!nahçek`, `a!öp`, `a!zuladesteaç`, `a!saat`, `a!top10`,`a!komutara`, `a!kısalt` , `a!ilginçbilgi`, `a!instagram`, `a!öneri`, `a!oylama` , `a!sunucular`, `a!çıkma-teklifi-et`')
    .addField('** MÜZİK KODLARI(9**',   `MÜZİK KODLARI @MERVEAKALS. \n` + '`GELDİ`, ')
 .addField('**SEVİYE SİSTEMİ**',   `Seviye sistemleri **SADECE YETKİLİLER KULLANABILIR**. \n` + '`a!seviye ödüller [belirli seviyeye gelince o rölü verme]`, `a!renk [kendinize özel renk ayarlarsınız]`, `a!reset [reset atar]`, `a!seviye resim [resim ayarlar]`, `a!saydamlaştır saydamlaştırır`, ')
 .addField('**SUNUCU İÇİN İDEAL(9**',   `Koruma sistemlerine kadar \n` + '`a!kanal-koruma`, `a!kanal-koruma-sıfırla`, ``,, `a!hazır-sunucu-komutları`, , `a!sunucu-koruma` , `a!ototag`, `a!kurulum-a!statskapat`, `a!spambotkorumasi , `a!spambotkorumasianti-spam`  ')
    .addField('**Premium**',   `sadece premium olanlar kullanabilir. [1 yıl ücretiz açıktır] \n` + '`a!reklam-isim-ban`, `a!a!yasaklama-kanal-ayarla`, `a!a!giriş-sistemi`,`a!kayit-verilecek-rol-ayarla`,`a!kayit-alıncak-rol-ayarla`,`a!kayit-sistemi-kapat`,`a!kayit-kanal-ayarla`, `a!kayıt-ol`,`a!günsayım`,`a!günlük-hediyem`,`a!p-market`,`a!istatistik`,`a!a!koruma-yönetici`,`a!a!herkese-rol-ver`,`a!banlimit`,')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};