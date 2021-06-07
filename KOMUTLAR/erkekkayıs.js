const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  member.removeRole('685593863930642468')
  member.addRole('628880361362948097')
  let vrol = "688668757584773165";
  let arol = "688672307643678731";
  member.addRole(vrol);
  member.removeRole(arol);

const embed = new Discord.RichEmbed()


      .setDescription("Kayıt İşlemi Başarılı")
    .setColor("GREEN")
    .addField(":star: Yetkili", message.author)
    .setTimestamp()
    .addField(":star: Kaydedilen Üye", member)
    .setTimestamp()
    .addField(`:star: Verilen Rol`, message.guild.roles.get(vrol))
    .setTimestamp()
    .addField(`:star: Alınan Rol`, message.guild.roles.get(arol))
    .setFooter("© Register")
  .setTitle("@☑️ | MEMBERS")
.setDescription("tagımız MR|")

    .setFooter("| kayıt sistemi")
    .setColor("BLUE")
.addField(`Destek Ol`, `[Tıkla]()`, true)

.setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(` <a:left:647823440203612170> **Kaydınız Başarıyla Gerçekleşti! İyi Eğlenceler.**`)
        .setColor('00000')
        .setTimestamp()
.setImage("https://cdn.discordapp.com/attachments/685855823154642986/686671417537724429/maxresdefault.png")
client.channels.get('688669564392964097').send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "ArdaDemr Kayıt Sistemi",
  usage: "ArdaDemr Kayıt Sistemi"
};