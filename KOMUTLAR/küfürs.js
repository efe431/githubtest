const Discord = require("discord.js");
let kufur=[
    "",
    "amına kodumun jedayı seni",
    "babanın annesinin amına koyayım orul orul orospu evladı",
    "ebenin amı gibi kaşları da kara",
    "seni anasının amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
    "senin ananın amına mancınıkla patates atayım",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "ananın amını keserim cebime koyarım sıkıldıkça sikerim",
    "ananın amına sınav yapar 2 milyon kişiyi sokarım",
    "amına barut döker sürtünmeyle yakarım orospu evladı",
    "Naber Gavat",
    "Annanı varya gökte sikerim orospu evladı",
    "OYUSPUS ÇOÇUGU GAVAR ANANI GÖKTE BABANO YATAKTA SIKTIGIMIZINI",
    "MERVEAKALS TARAFINDAN KODLANDI %100 [BURDAKİ KELİMELER SAHTEDİR EĞLENCE AMAÇLIDIR]",
    "Naber Oç Yarıdamı ketsik seni amk gavatı hayattta sikilmedğini anı yaşatırım GAVAT piç",
    "SÜPRİZZZZ: BBU KODU YAZAN MERVEAKALS TIR ÇALMA",
    "EFSANE KAVRAR EFSANE SOKARIM",
    "ÖNCE SENİ YATAK ALTI SONRA SENİ Yarrak üstü oturturum",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "küfür ederdim ama anan çok yordu",
    "öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
  ]
exports.run = async (client, message, args) => {
    let member = message.mentions.members.first();
  
        const embed = new Discord.RichEmbed()
        .addField(`Bu kodlar şaka amaçlıdır alınmayınız !! **kodlama merveakals**kodu kullanan ${member} `)
        .message(`Test message`)
     };
      
      
      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['küfüret','sövmelisin','küfür'],
        permLevel: 1
       };
      
      exports.help = {
        name: 'küfür',
        description: 'Birine Söver. küfür eder **merveakals tarafıdan kodlanmıştır**',
        usage: 'küfür <kullanıcı>'
       }