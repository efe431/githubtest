const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setAuthor("MR|Eagles Moderasyon menüsü", client.user.avatarURL)
.setColor('Random')
.setTimestamp()
.setDescription("Modrasyon komutlar 1 ")
.addField("• a!Çekiliş-yap 》>", "Çekiliş yapar")
.addField("• a!ban-koruma 》>", "Ban koruma log kanalı")
.addField("• a!banlimit 》>", "Ban Limit ayarlar")
.addField("• a!bb-kanal a!hg-kanal 》>", "giren çıkan kanal ayarlar")
.addField("• a!ban-koruma-sıfırla》>", "Ban koruma sıfırlar")
.addField("• a!koruma》>", "SUNUCUNU ULŞTRA ŞEKİLDE KORUR")
.addField("• a!spambotkorumasi》>", "Spam bot koruması")
.addField("• a!giriş-sistemi》>", "Giriş sistemi ayarlarsın")
.addField("• a!güvenlik》>", "güvenlik")
.addField("• a!hazır-sunucu-komutları》>", "Hazır sunucu komutlarıdır")
.addField("• a!herkese-rol-ver》>", "Herkese rl verir")
.addField("• a!kanal-koruma》>", "Kanaları silemez **taç kişi olan hariç**")
.addField("• a!kanal-koruma-sıfırla》>", "Sıfırlar")
.addField("• KAYIT SİSTEMLERİ》>")
.addField("• a!kayit-kanal-ayarla》>", "Kayıt olcak kanalı ayarlar")
.addField("• a!kayit-sistemi-kapat》>", "Kayıt sistemi kapatır")
.addField("• a!kayıt-ol》>", "güvenlik")
.addField("• a!kayit-alınacak-rol-ayarla》>", "ZATEN BİLLİ")
.addField("• a!kayit-verilecek-rol-ayarla》>", "belli")
.addField("•kAYIT SİSTEMLER BİTTİ》>")

    

};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  category: 'Oyun',
  name: 'moderasyon',
  description: 'Adam asmaca oyununu oynarsınız.',
  usage: 'adamasmaca'
};