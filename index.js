const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "a!";
const bot = client
client.on('ready', () => 
    setInterval(changing_status, 5000);
client.login("token")
    function changing_status() {
        let status = [client.users.size+" utilisateurs", "des gens taper a!help", "la AVATAR ESPORT", "Avatar_Thomas#4399"]
        let nowstat = status[Math.floor(Math.random() * status.length)]

        bot.user.setActivity(nowstat, {type: "WATCHING"})
    }
})



client.on('message' , message =>{
    if(message.content === "tu fais quoi" || message.content.startsWith(prefix+"tfk") || message.content.startsWith(prefix+"tu fais quoi")){
    message.channel.send('Je vous surveille toi et tous les autres de la Team Avatar');
    console.log('répond à tfq');    
    }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('478331645959733258').send(':tada: **Bienvenue**' + member.user + '\nNous sommes ' + member.guild.memberCount);
})

bot.on('message', message => {
    if (message.content.startsWith(prefix+"help"))
    { var help_embed = new Discord.RichEmbed()
            .setTitle(bot.user.username+" - aide")
            .setDescription("_ _")
            .addField(":gear: Moderation :gear:", "_ _")
            .addField(prefix+"ban @utilisateur", "bannir un utilisateur du serveur.")
            .addField(prefix+"kick @utilisateur", "expulser un utilisateur du serveur.\n:warning: Cette commande est en développement.")
            .addField(":pencil: Interraction :pencil:", "_ _")
            .addField("a!tfk", "Interragir avec le bot.")
            .addField("a!tu fais quoi", "Interragir avec le bot.")
            .addField("a!tu fais quoi", "Interragir avec le bot.")
            .addField("a!invite", "pour m'inviter sur votre serveur")
            .addField("a!avatar", "permet de voir votre avatar (logo) en plus grand")
            .addField("a!ip", "permet de voir l'ip du serveur"
            .addField("a!site", "permet de voir le site de la AVATAR ESPORT")
            .addField(":door: Autres :door:", "_ _")
            .addField("Système de bienvenue", "_ _")
            .addField("/ Pas de commande /", "Dès qu'un utilisateur rejoint, je lui souhaite la bienvenue.")
            .addField(prefix+"bvn @utilisateur", "Souhaiter la bienvenue à un utilisateur.")
            .message.author.send(help_embed)
            .message.channel.send("L'aide vous a bien été envoyée en message privé !")
            )
        };


    ///////////////////////////
    // Commande de bienvenue //
    ///////////////////////////

    if (message.content.startsWith(prefix+"bvn")) {
        let user = message.mentions.users.first()
        if (user) {
            message.delete()
            var w_embed = new Discord.RichEmbed()
                .setTitle(message.author.tag+" souhaite la bienvenue à "+user.tag+" !")
                .setDescription("_ _")
                .setFooter("Si vous aussi vous voulez souhaiter la bienvenue, tapez ?bvn @utilisateur.", bot.users.find('id', user.id).avatarURL)
            message.channel.send(w_embed)
        } else {
            message.delete()
        }
    }

    //////////////////////////////////////////////////////////
    // Important : Id du salon de logs : 530364624738975764 //
    //////////////////////////////////////////////////////////

    if (message.content.startsWith(prefix+"ban")) {
        if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            if (message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                if (message.mentions.users.first()) {
                    let utoban = message.mentions.users.first()
                    if (message.guild.member(utoban).bannable) {
                        message.guild.member(utoban).ban("Banni par "+message.author.tag+".")
                        message.react("👍")
                        message.channel.send("Utilisateur banni !")
                    } else {
                        message.channel.send("Je ne peux pas bannir cet utilisateur.")
                    }
                } else {
                    message.channel.send("Si vous voulez bannir un utilisateur, mentionnez le.")
                }
            } else {
                message.channel.send("Il me faut la permission de bannir des membres.")
            }
        } else {
            message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
        }
    }

    if (message.content.startsWith(prefix+"kick")) {
        if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            if (message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                if (message.mentions.users.first()) {
                    let utoban = message.mentions.users.first()
                    if (message.guild.member(utoban).kickable) {
                        message.guild.member(utoban).ban("Expulsé par "+message.author.tag+".")
                        message.react("👍")
                        message.channel.send("Utilisateur expulsé !")
                    } else {
                        message.channel.send("Je ne peux pas expulser cet utilisateur.")
                    }
                } else {
                    message.channel.send("Si vous voulez expulser un utilisateur, mentionnez le.")
                }
            } else {
                message.channel.send("Il me faut la permission d'expulser des membres.")
            }
        } else {
            message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
        }
    }
})

bot.on('messageDelete', message => {
    var deleted_embed = new Discord.RichEmbed()
        .addField("Message supprimé", "_ _")
        .addField("Autheur du message :", message.author.tag)
        .addField("Message", message.content)
        .addField("Message écrit le", message.createdAt)
    bot.channels.get('530364624738975764').send(deleted_embed)
});

client.on('ready', () => {
    console.log(`» avatar - BOT Fonctionnel`)
});

client.on('message', message => {
    if (message.content === 'a!site') {
        var myIP = new Discord.RichEmbed()
            .setAuthor("Commande réussie [!site]", message.author.avatarURL)
            .setDescription("» Adresse du site : [Site](https://avatar-e-sport.weebly.com)")
            .setColor("0x00FFFF")
            .setTimestamp()
        var mySend = new Discord.RichEmbed()
            .setTitle("avatar - [!site]", message.author.avatarURL)
            .setDescription("Regarde tes messages privés !") 
            .setColor("0x00FFFF")
            .setTimestamp()
        message.channel.sendEmbed(mySend);
        message.author.send(myIP);
    }
});

client.on('message', message => {
    if (message.content === 'a!avatar') {
        var myAvatar = new Discord.RichEmbed()
            .setAuthor("Commande réussie [!avatar]", message.author.avatarURL)
            .setImage(message.author.avatarURL)
            .setColor("0x00FFFF")
            .setTimestamp()
        var mySend = new Discord.RichEmbed()
            .setTitle("avatar - [!avatar]", message.author.avatarURL)
            .setDescription("Regarde tes messages privés !") 
            .setColor("0x00FFFF")
            .setTimestamp()
        message.channel.sendEmbed(mySend);
        message.author.send(myAvatar);
    }
});

client.on('message', message => {
    if (message.content === 'a!ip') {
        var myIP = new Discord.RichEmbed()
            .setTitle("» avatar.fr")
            .setAuthor("Commande réussie [!ip]", message.author.avatarURL)
            .setDescription("» IP du Serveur : play.avatar.fr")
            .setColor("0x00FFFF")
        var mySend = new Discord.RichEmbed()
            .setTitlindee("avatar - [!ip]", message.author.avatarURL)
            .setDescription("Regarde tes messages privés !") 
            .setColor("0x00FFFF")
            .setTimestamp()
        message.channel.sendEmbed(mySend);
        message.author.send(myIP);
    }
});

client.on('message', message => {
    if (message.content === 'a!invite') {
        var myIP = new Discord.RichEmbed()
            .setTitle("» avatar.fr")
            .setAuthor("Commande réussie [a!invite]",)
            .setDescription("»invitez le bot avatar en cliquant [ici](https://discordapp.com/oauth2/authorize?client_id=528930082090123266&scope=bot&permissions=8)")
            .setColor("0x00FFFF")
        var mySend = new Discord.RichEmbed()
            .setTitle("avatar - [a!invite]",)
            .setDescription("Regarde tes messages privés !") 
            .setColor("0x00FFFF")
            .setTimestamp()
        message.channel.sendEmbed(mySend);
        message.author.send(myIP);
    }
});
