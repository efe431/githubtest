const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === "543796966602309653") {
        
        message.channel.send(':1234: **Sunucu için Gerekli Roller Kuruluyor permisionlarını ayarlamyaı unutma**');
        
       message.guild.createRole({ name: 'Kurucu', position: 50, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'RED'})
       
      message.guild.createRole({ name: 'Yetkili', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'GREEN'})
      
      message.guild.createRole({ name: 'Admin', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'YELLOW'})

message.guild.createRole({ name: 'MODERATÖR', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'BLACK'})

message.guild.createRole({ name: 'Vip+', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'BLACK'})

message.guild.createRole({ name: 'Vip', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'GREEN'})
        
      message.guild.createRole({ name: 'Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'GREEN'})
      
      message.guild.createRole({ name: 'Kayıtsız Üye', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'RED'})
        
     message.guild.createRole({ name: 'BOT', position: 20, permissions: ['MANAGE_MESSAGES', 'MANAGE_ROLES'], color: 'BLUE'}) 

 


 message.guild.createRole({ name: 'ROLLERİN PERM AYARLAMAYI UNUTMA AYARLI DEĞİLDİR renkleri ayarlayabilirsin', position: 20, permissions: ['MANAGE_MESSAGES'], color: 'RED'})        
        
        message.channel.send(':white_check_mark: **Roller Kuruldu**');
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu şimdilik kullanamazsınız!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolkur','rol-kur'],
  permLevel: 3
};

exports.help = {
  name: 'rol-oluştur',
  description: 'Bot için gerekli ayarları kurar.',
  usage: 'roller'
};