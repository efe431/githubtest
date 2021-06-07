const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = ['Telefonunda arattığın en son şey nedir ?', 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?', 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', 'Merve ile ilgili hiisetiğin bir kelime söyle', 'Sevidğin kızın ismi', '**BOŞ ŞANSLI ÇOÇUK**', 'Hiç Öpüştünmü', 'Hiç seviştinmi', 'Botu nasıl buldun', 'merve ile svişirmiydin', 'Merve güzelmi', 'en sevdğin film', 'en mutlu oldugun an', 'Merve sana çıkma teklifi etse kabul edermısın']
    var cesaret = ['İğrenç bir ses tonuyla şarkı söyle', 'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır', 'Durumuna MerveAkals Seviyorum yaz', 'BOŞ **ŞANSLISIN**', 'Merveye dm yaz Çıkma teklifi et', 'SUNUCUDA BİRİNE 10 SANİYELİĞİNE YETKİLİ YAP [tanımadığın biri]', 'merveyle +18 konuşma yap', 'Botu sunucunda tanıt', 'SUNUCUYA ÇAY İSMARLA', 'sunucudan hernagı birine hediye ver', 'BONUS**1 İNVİTE KAZANDIN**']
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['doğruluk-cesaret'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};