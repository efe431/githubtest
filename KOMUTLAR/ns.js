
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  
        const name = args.join(" ");

        if (!name) {
            return message.reply("Kullanıcı Adı Yazmadın!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Kullanıcı Adı Bulunamadı")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setAuthor(`Profil Bilgisi`)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .setDescription(`**- Kullanıcı Adı:** ${account.username}\n
            **- İsim:** ${account.full_name}\n
            **- Biyografi:** \n${account.biography.length == 0 ? "bulunmuyor" : account.biography}\n
            **- Gönderi Sayısı:** ${account.edge_owner_to_timeline_media.count}\n
            **- Takipçi Sayısı:** ${account.edge_followed_by.count}\n
            **- Takip Etme Sayısı:** ${account.edge_follow.count}\n
            **- Gizli Hesap:** ${account.is_private ? "Evet 🔐" : "Hayır 🔓"}\n`);

        message.channel.send(embed);
    }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ig'],
    permLevel: 0
};

exports.help = {
    name: 'instagram',
    description: 'İnstagram Hesabı Gösterir.',
    usage: 'instagram <hesapadı>'
};