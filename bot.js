const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true})
bot.on("ready", async() => {
    console.log(`Bot is ready! ${bot.user.username}`);

    try {
        let link = await bot.generateInvite(["ADMINSTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
    bot.user.setPresence({ game: { name: '!helpcmds for help', type: 0 } });
});
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}pinfo`) {
        let args = message.content.split(" ").slice(1);
            message.channel.sendMessage("```Username: " + message.author.username + "```");
            message.channel.sendMessage("```ID: " + message.author.id + "```");
            message.channel.sendMessage("```Nickname: " + message.author.nickname + "```");
        }
        if (command === `${prefix}setnick`) {
            let nickname = args.join(' ');
            if (nickname.length < 1) return message.reply('Enter a name yutz').catch(console.error);
            if (!message.guild.member(bot.user).hasPermission('CHANGE_NICKNAME')) return message.channel.sendMessage('you do not have the correct permissions.').catch(console.error);
            message.guild.members.get('355412065579565058').setNickname(nickname);
                      message.reply('OK nick set!').catch(console.error);
          } else
          if (command === `${prefix}karma`) {
            let user = message.mentions.users.first();
             if (message.mentions.users.size < 1) return message.reply('Who deserves it?').catch(console.error);
           message.channel.send(user.username + " What comes around, goes around!");
         } else 
         if (command === `${prefix}roast`) {
            let user = message.mentions.users.first();
             if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.').catch(console.error);
             var roast = [
                       "Were you born on the highway? That is where most accidents happen.",
                       "How stupid are you? haha",
                       "Roses are red, violets are blue your name makes sense but why don't you?",
                       "i feel bad for you because you're trying so hard to make us all laugh but you only made yourself laugh",
                       "words can only be read, but lucky for you they cannot happen",
                       "your name reminded me to take a shit",
                       "your name explains everything about you",
                       "my ass has more holes than you have on your words",
                       "don't you have better business rather than talking to yourself?",
                       "How many times did you wake up today?",
                       "is your life so much bored that you need to be here?",
                       "roses are red violets are blue, we all have a brain but where did yours go?",
    
        
       ];
       var roasts = roast[Math.floor(Math.random() * roast.length)];
           message.channel.send(user.username + " " + roasts);
         } else
    if(command === `${prefix}userinfo`) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This is the motherfucker's info")
        .setColor("#9B59B6")
        .addField("Discord name & tag", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt)
    
        message.channel.sendEmbed(embed);
        return;
    }
    if (command === `${prefix}delmsg`) {
        let args = message.content.split(" ").slice(1);
        let messagecount = parseInt(args);
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("sorry, you don't have permission to use this command.")
        }
        if (message.member.hasPermission("ADMINISTRATOR")) {
        if (args.length < 1) return message.channel.send('How many should i delete?');
        message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages)); 
    }
}
if (command === `${prefix}ulog`) {
    let embed = new Discord.RichEmbed()
    .setDescription("UPDATE LOG","Here you can see all the updates for OddworldBot, by silverroxetz.")
    .addField("UPDATE 16.09.2017 18:26", "Added whitelist, blacklist admin & unadmin commands, bot is now running 24/7, before it was running from host's pc.")
    .addField("UPDATE 15.09.2017 15:16", "Added tons of new commands + the first version of oddworldbot is released.")
    .setFooter("Silverroxetz's Oddworld Bot")
    message.channel.send("Update log is sent to your ugly dm.")
    message.author.send(embed)
}
    if (command === `${prefix}helpcmds`) {
        message.channel.sendMessage("The help commands has been sent to you, check your DM.")
            let embed = new Discord.RichEmbed()
            .setDescription("Moderator/admin", "NOTE: TO use these commands you must have ADMINISTRATOR permission.")
            .addField("!kick -- kicks a member 'Reason must be applied'")
            .addField("!ban -- bans a member 'Reason must be applied")
            .addField("!setnick -- changes nickname of the bot")
            .addField("!setgame -- changes the bot's game")
            .addField("!warn2 warns a member, tells whos the moderator ")
            .addField("!sendwarn sends the user a warning with a embed type")
            .addField("!mute -- mutes someone")
            .addField("!unmute -- unmutes people")
            .addField("!delmsg (Number of messages) -- Deletes a set of message")
            .addField("!announce -- send an annoucement to #news (REMEMBER ADD A '.' after !announce) (EX: !announce . Your announcement)")
            .addField("!whitelist -- adds someone to whitelist for anti swear meaning it disables swearing (mention someone, or mention yourself)")
            .addField("!blacklist -- removes whitelist from anti swear, meaning they are blocked from swearing (mention someone or mention yourself)")
            .addField("!admin -- gives a role with administrator permission (mention someone)")
            .addField("!unadmin -- removes admin role from the user.")
            message.author.sendEmbed(embed);
            let fun = new Discord.RichEmbed()
            .setDescription("Fun")
            .addField("!lenny -- sends a classic lenny face")
            .addField("!roast -- roast someone")
            .addField("!fuck -- fuck someone")
            .addField("!karma -- What comes from around, goes around :)")
            .addField("!testluck -- test someone's luck")
            message.author.sendEmbed(fun)
            let basic = new Discord.RichEmbed()
            .setDescription("Basic")
            .addField("!pinfo -- gets info about you")
            .addField("!sinfo -- gets the server's info")
            .addField("!userinfo -- another shit of infos")
            .addField("!ask -- ask someone a question 'sends dm'")
            .addField("!report -- send a report to the admins if someone is abusing/breaking rules")
            message.author.sendEmbed(basic)
            let custom = new Discord.RichEmbed()
            .setDescription("Custom Commands")
            .addField("!badending -- sends a video of oddworld: munch's oddysee bad ending")
            .addField("!selfkick -- kick yourself from the server")
            .addField("!demsexyhdlegs -- sends some classic words")
            .addField("!joke1 -- sends some shit")
            .addField("!!rosalinasexylegs -- i don't know what this is")
            .addField("!X rosalina -- sends rosalina pic")
            .addField("!!svenhead -- a joke")
            .addField("!!booty -- sends a booty pic")
            message.author.sendEmbed(custom)
            let extra = new Discord.RichEmbed()
            .setDescription("EXTRA")
            .addField("!exrules -- Sends you a dm of extra rules for this server")
            message.author.send(extra)
            return;  
    }
    
    if (command === `${prefix}exrules`) {
        let sinfo = new Discord.RichEmbed()
        .setDescription("Here is the server's extra rules")
        .addField("Basic Description", "This server belongs to Sven Cuaresma (SvenDaHacker64#0876)")
        .addField("Rules", "Do not hate others just because you disagree their opinion.")
        .addField("2", "No racism, racist people are not tolerated. (You can joke a little about it but don't go too far)")
        .addField("3", "If you have a question/problem/idea you really need to ask/solve/say rather use !ask 'username' and do not spam mentions")
        .addField("4","If someone is harrassing you, either block them or use !report 'username', 'reason' at that point an admin will be informed")
        .addField("5","Do not spam the same thing over and over again if people already heared it.")
        .addField("6", "Do not ask for Mod/admin just because you are active, you can become a mod/admin if you deserve it")
        .addField("7", "Do not write stuff that does not match the text channels (EX: Text channel is: 'hacking' you talk about why trump has a horse face)")
        .addField("8", "Do not create accounts & join this server just on purpose of breaking the rules")
        .addField("9", "Do not falsely report others just because you hate them, doing so may result in a kick/ban")
        .addField("10", "If you have created a bot make sure not to use the same prefix or the same command, it may cause spams in chats.")
        .setFooter("Silverroxetz's OddworldBot")
        message.author.send(sinfo)
        let punishment = new Discord.RichEmbed()
        .addField("**PUNISHMENTS**", "I hope you don't do this.")
        .addField("Minor", "You will receive a warning for breaking the rules (remember: 3 warnings = kick, no discussion) (you can only get one warning per hour)")
        .addField("Medium", "You will only receive one warning the next warning will be a kick")
        .addField("Repeating", "If you repeat breaking the rules within 1 hour you will be muted for a set of time (5 min, 15min, 30min, 1 hour, 4 hours)")
        .addField("Major", "You will be kicked")
        .addField("High", "You will be banned for a temporaly time. (1 day, 7 days, 14 days, 1 month")
        .addField("Outrageously high", "You will be banned permanently.")
        .addField("What to do if you got punished unfairly", "Contact the owner")
        .setFooter("Silverroxetz's oddworldbot")
        message.author.send(punishment)
        
    }
    if(command === `${prefix}kick`) {
        if  (!message.member.hasPermissions(["KICK_MEMBERS"])) return message.reply("Sorry yutz you don't have permission");
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        let server = message.guild.name
        if (reason.length < 1) return message.reply('Reason please?');
        if (message.mentions.users.size < 1) return message.reply('yutz kick who?').catch(console.error);
     
        if (!message.guild.member(user).kickable) return message.reply("Yutz can't kick dis person!");
        message.user.send(`You have been kicked from ${server} for: ${reason}`)
        let member = await message.guild.member(user).kick()
        const Discord = require("discord.js");
        const embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .addField('Action:', '__***Kick***__')
            .addField('User:', `${user.username}`)
            .addField('Moderator:', `${message.author.username}`)
            .addField('Reason', reason)
            .setFooter('silverroxetz oddworldbot')
        return message.channel.sendEmbed(embed).catch(console.error);
 }
 if(command === `${prefix}ban`) {
    if  (!message.member.hasPermission(["BAN_MEMBERS"])) return message.reply("Sorry yutz you don't have permission");
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (reason.length < 1) return message.reply('Reason please?');
    if (message.mentions.users.size < 1) return message.reply('yutz ban who?').catch(console.error);
 
    if (!message.guild.member(user).kickable) return message.reply("Yutz can't ban dis person!");
    let member = await message.guild.member(user).ban()
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTimestamp()
        .addField('Action:', '__***Ban***__')
        .addField('User:', `${user.username}`)
        .addField('Moderator:', `${message.author.username}`)
        .addField('Reason', reason)
        .setFooter('Silverroxetzs Oddworldbot')
    return message.channel.sendEmbed(embed).catch(console.error);
}
if(command === `${prefix}selfkick`) {
    
    let reason = args.slice(1).join(' ');
    let user = await message.guild.member(message.author).kick()
    const embed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTimestamp()
    .addField('Action:', '__***SelfKick (A.K.A leave)***__')
    .addField('User:', `${user.username}`)
    .addField('Moderator:', `No moderators applied for this action.`)
    .addField('Reason', reason)
    .setFooter('Silverroxetzs Oddworldbot')
return message.channel.sendEmbed(embed).catch(console.error);
}
if (command === `${prefix}setgame`) {
    let joining = args.join(" ");
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("sorry, you don't have permission to use this command")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {    
    bot.user.setPresence(args.join(" "));
    bot.user.setGame(args.join(" "));
    message.channel.send("Now playing: " + joining);
}
}
if(command === `${prefix}mute`) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Yutz i don't have permission");

let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!toMute) return message.channel.sendMessage("Yutz who should i mute?")

if(toMute.id === message.author.id) return message.channel.sendMessage("yutz you cannot mute yourself!");
if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("Yutz this person has a higher role");

let role = message.guild.roles.find(r => r.name === "OB Muted");
if(!role) {
    try {
        role = await message.guild.createRole({
            name:"OB Muted",
            color: "#000000",
            permissions: []
        });
        
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
            });
        });
     } catch(e) {
            console.log(e.stack);
     }

    }
    
 if(toMute.roles.has(role.id)) return message.channel.sendMessage("dis guy is already muted");

await toMute.addRole(role);
message.channel.sendMessage("Ok they are muted yutz!");


 return;
}
if(command === `${prefix}unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Yutz i don't have permission");
    
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("Yutz who should i unmute?")
    
    let role = message.guild.roles.find(r => r.name === "OB Muted");
   
        
     if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This guy isn't even muted yutz");
    
    await toMute.removeRole(role);
    message.channel.sendMessage("Ok they are unmuted yutz!");
    
     return;
} 
if(command ===`${prefix}sendwarn`) {
    let admin = message.guild.roles.find(r => r.name === "Admin");
    if(!message.member.roles.has(admin.id)) return message.channel.sendMessage("Sorry, you do not have permission to use this command.");
    let reason = args.slice(1).join(' ');
    let warnMember = message.guild.member(message.mentions.users.first());
    const pussyhole = new Discord.RichEmbed()
    .setColor('#FF0000')
    .addField('**Warning**', 'You have been warned!')
    .addField('Moderator:', message.author.username)
    .addField('Reason', reason)
    .setFooter('Silverroxetzs Oddworldbot')
    return warnMember.send(pussyhole)
  }
  if(command ===`${prefix}report`) {
      message.delete()
    let modlog = message.guild.channels.find(r => r.name === "report-log");
    if(!modlog) return message.channel.send("You must create a 'report-log' textchannel in order to use this command.")
    let reason = args.slice(1).join(' ');
    if(!reason) return message.author.send("Please supply a reason for report. (Make sure it is long enough so admins can understand)") 
    let Target = message.guild.member(message.mentions.users.first())
    if(!Target) return message.author.send("You must mention someone with a reason to report.")
    let server = message.guild.name
    message.author.send("Thank you for your report, our moderators will take a look at it.")
    const embed = new Discord.RichEmbed()
    .addField("**REPORT SUMMARY**", ".")
    .addField("Report reason:", reason)
    .addField("Author:", message.author)
    .addField("Report Target:", Target)
    .addField("Server:", server)
    .setFooter("Silverroxetz's Oddworldbot")
    return bot.channels.get(modlog.id).sendEmbed(embed);
  }
  if (command === `${prefix}sinfo`) {
    let server = message.guild.name
    let owner = message.guild.owner
    let AFKTimeout = message.guild.afkTimeout
    let R = message.guild.roles
    let Userc = message.guild.memberCount
    let sinfo = new Discord.RichEmbed()
    .setDescription("Here is the server's information")
    .addField("Owner", owner)
    .addField("Server Name", server)
    .addField("Server ID", message.guild.id)
    .addField("AFK Timeout", AFKTimeout)
    .addField("This server has", Userc + " Users")
    .setFooter("Silverroxetz's OddworldBot")
    message.channel.send(sinfo)
}
if (command === `${prefix}whitelist`) {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
message.channel.send("sorry, you don't have permission")
    }
    if(message.member.hasPermission("ADMINISTRATOR")) {
    let role = message.guild.roles.find(r => r.name === "ODDWORLDWHITELIST");
    if(!role) {
        try {
        role = await message.guild.createRole({
            name:"ODDWORLDWHITELIST",
            color: "GREEN",
            permissions: []
        })
     } catch(e) {
            console.log(e.stack);
     }

    }
    let white = message.guild.member(message.mentions.users.first())
    if (!white) return message.channel.send("who should i add to whitelist?")
    await white.addRole(role);
    message.channel.send("Ok they are added to whitelist for anti swear")
}
}
if (command === `${prefix}blacklist`) {
    if(!message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send("sorry, you don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    let role = message.guild.roles.find(r => r.name === "ODDWORLDWHITELIST");
    if(!role) return message.channel.send("Role 'ODDWORLDWHITELIST' is not found, use !whitelist 'name' in order to whitelist + create the role")
    let white = message.guild.member(message.mentions.users.first())
    if (!white) return message.channel.send("who should i remove from whitelist?")
    await white.removeRole(role);
    message.channel.send("Ok they are removed from whitelist.")
}
}
if (command === `${prefix}admin`) {
    if(!message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send("sorry, you don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    let white = message.guild.member(message.mentions.users.first())
    if (!white) return message.channel.send("who should i admin?")
    let role = message.guild.roles.find(r => r.name === "ODDWORLDADMIN");
    if(!role) {
        try {
        role = await message.guild.createRole({
            name:"ODDWORLDADMIN",
            color: "RED",
            permissions: ["ADMINISTRATOR"]
        })
     } catch(e) {
            console.log(e.stack);
     }

    }
    
    if(white.roles.has(role.id)) return message.channel.sendMessage(`${white} is already an admin.`);

    await white.addRole(role);
    message.channel.send(`${white} has been given admin`);
}
}
if (command === `${prefix}unadmin`) {
    if(!message.member.hasPermission("ADMINISTRATOR"))
    message.channel.send("sorry, you don't have permission.")
    if(message.member.hasPermission("ADMINISTRATOR")) {
    let white = message.guild.member(message.mentions.users.first())
    if (!white) return message.channel.send("who should i unadmin?")
    let role = message.guild.roles.find(r => r.name === "ODDWORLDADMIN");
    await white.removeRole(role);
    message.channel.send(`${white} has been unadmined.`)
    }
}
if (command === `${prefix}lenny`){
    if(message.content.includes("lenny"))
    message.delete()
    message.channel.sendMessage("( ͡° ͜ʖ ͡°)")
    }
    if (command === `${prefix}testluck`) {        
        let user = message.mentions.users.first();
         if (message.mentions.users.size < 1) return message.reply('Mention someone to test their luck').catch(console.error);
         var testluck = [
                   "Is lucky today",
                   "Is maybe lucky today",
                   "Is not lucky today",
   ];
   var testluck = testluck[Math.floor(Math.random() * testluck.length)];
       message.channel.send(user.username + " " + testluck);
     } else
     if (command === `${prefix}todayidea`) {
        let user = message.mentions.users.first();
         if (message.mentions.users.size < 1) return message.reply('Mention someone to tell their day').catch(console.error);
         var testluck = [
            "Today, why don't you go play some video games?",
            "Today, why not sit here and chat with us?",
            "Today, you could maybe code something",
            "Today, why not shut the f up all day?",
            "Today, you could have sex with a girl",
            "Today, you could watch some cartoons",
            "Today, you could watch porn",
            "Today, you could bully someone",
            "Today, why not roast someone?",
   ];
   var threesix = threesix[Math.floor(Math.random() * threesix.length)];
       message.channel.send( " " + threesix);
     } else 
     if (command === `${prefix}360noscope`) {
        let user = message.mentions.users.first();
         if (message.mentions.users.size < 1) return message.reply('tell me who deserves a 360 nuhscupe?').catch(console.error);
         var threesix = [
            `Success! ${user} was 360 noscoped!`,
            `Fail! The 360 noscope attempt on ${user} was missed! `,
            `Karma fail! ${user} was quicker and 360 noscoped ${message.author}`,

   ];
   var threesix = threesix[Math.floor(Math.random() * threesix.length)];
       message.channel.send(" " + threesix);
     } else
    if(command === `${prefix}ask`) {
        message.delete()
        if (message.mentions.users.size < 1) return message.reply('Mention someone to ask them.')
        let question = args.slice(1).join(' ');
            let warnMember = message.guild.member(message.mentions.users.first());
            const askquestion = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .addField('**QUESTION**', 'Someone asked you something')
            .addField('Asker:', `${message.author.username}`)
            .addField('Question:', question)
            .setFooter('Silverroxetzs Oddworldbot')
            warnMember.send(askquestion)
        }
        if(command === `${prefix}@sendminecraft`) {
            message.delete()
            let lol = args.slice(1).join(' ');
            let modlog = bot.channels.find('name', 'minecraft');        
                        bot.channels.get(modlog.id).send(lol);
        }
        if(command === `${prefix}@sendnews`) {
            message.delete()
            let lol = args.slice(1).join(' ');
            let modlog = bot.channels.find('name', 'news');        
                        bot.channels.get(modlog.id).send(lol);
        }
        if(command === `${prefix}@sendgeneral`) {
            message.delete()
            let lol = args.slice(1).join(' ');
            let modlog = bot.channels.find('name', 'general');        
                        bot.channels.get(modlog.id).send(lol);
        }             
        if(command === `${prefix}@sendhacking`) {
            message.delete()
            let lol = args.slice(1).join(' ');
            let modlog = bot.channels.find('name', 'hacking');        
                        bot.channels.get(modlog.id).send(lol);
        }  
        if(command === `${prefix}@sendmisc`) {
            message.delete()
            let lol = args.slice(1).join(' ');
            let modlog = bot.channels.find('name', 'misc');        
                        bot.channels.get(modlog.id).send(lol);
        }     
        if(command === `${prefix}@sendbotsfun`) {
            message.delete()
            let lol = args.slice(1).join(' ');
            let modlog = bot.channels.find('name', 'bots-fun');        
                        bot.channels.get(modlog.id).send(lol);
        } 
        if(command === `${prefix}announce`) {
            if(!message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send("Sorry, you don't have permission to use this command.")
            }
            if(message.member.hasPermission("ADMINISTRATOR")) {
            message.delete()
            let info = args.slice(1).join(' ');
            let modlog = bot.channels.find('name', 'news'); 
        const embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTimestamp()
        .addField('**ANNOUNCEMENT**', '.')
        .addField('Announcement info:', info)
        .addField('Announcer:', message.author)
        .setFooter('Silverroxetzs Oddworldbot')
        return bot.channels.get(modlog.id).sendEmbed(embed);  
        }                               
    } 
    if (command === `${prefix}testdamn`) {
        let role = message.guild.roles.find(r => r.name === "swearblock");
        if(message.member.roles.has(role.id)) return message.channel.send("You have swearblock!")
        if(!message.member.roles.has(role.id)) return message.channel.send("You don't have swearblock!")

    }                               
        if(command === `${prefix}fuck`) {
            message.delete()
            if (message.mentions.users.size < 1) return message.reply('Mention someone to fuck them.')
                let warnMember = message.guild.member(message.mentions.users.first());
                warnMember.send(message.author +" Fucked you!")
            }
            if(command === `${prefix}warn2`) {
                message.delete()
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Sorry, you do not have permission to use this command.");
                if(message.member.hasPermission("ADMINISTRATOR")) {
                if (message.mentions.users.size < 1) return message.reply('Mention someone to warn them')
                let warnMember = message.guild.member(message.mentions.users.first());
                warnMember.send(message.author + " Has warned you for: " + args)
                }
            }
});
bot.on('guildMemberAdd', member => {
    console.log('user' + member.user.username + 'has joined')
    console.log(member)
    member.guild.channels.get('347502036692107265').send('**' + member.user.username + '**. has joined this server!');
});
bot.on('guildMemberRemove', member => {
    member.guild.channels.get('347502036692107265').send('**' + member.user.username + '**, has left the server BAI BAI!');
});

bot.login(botSettings.token);
bot.on('message', (message) => {
    if(message.content =='!demsexyhdlegs') {
        message.channel.sendMessage('Demsexyhdlegs does not have a link yet :)');
    
    }
});
bot.on('message', (message) => {
    if(message.content =='!joke1') {
        message.channel.sendMessage("You know the reason why sven put crash bandicoot into a folder? because he is afraid it might come out and hump him.");
    }
});
bot.on('message', (message) => {  
    let user = message.author
    let modlog = bot.channels.find('name', 'bot-log');
    var noswear = [
        "fuck",
        "shit",
        "bitch",
        "cunt",
        "faggot",
        "nigga",
        "fag",
        "fuk",
        "fuc",
        "gay",
        "lesbian",
        "pussy",
        "cock",
        "dick",
        "bish",
        "niga",

    ];
if (noswear.some(word => message.content.toLowerCase().includes(word))) {
    let role = message.guild.roles.find(r => r.name === "ODDWORLDWHITELIST");
    if(message.member.roles.has(role.id)) return undefined
    if(!message.member.roles.has(role.id)) {
    message.delete()
  message.channel.send(`${message.author} Do not swear!`);
  const embed = new Discord.RichEmbed()
  .setColor('#FF0000')
  .setTimestamp()
  .addField('Action:', '__***Warning***__')
  .addField('User:', `${user.username}`)
  .addField('Moderator:', `OddworldBot`)
  .addField('Reason', "Swearing")
  .addField('Comment:', message.content )
  .setFooter('Silverroxetzs Oddworldbot')
  return bot.channels.get(modlog.id).sendEmbed(embed);
}
}
});
bot.on('message', (message) => {
    if(message.content =='!badending') {
        message.channel.sendMessage("https://www.youtube.com/watch?v=dkn_JSvg-Co&t=8s");
    }
});
bot.on('message', (message) => {
    if(message.content =='!!booty') {
        message.channel.sendMessage("https://www.merakilane.com/wp-content/uploads/2016/04/9-Butt-Workouts-For-a-Sexy-Sculpted-Booty-1.jpg Sven is now powerless against this.");
    }
});
bot.on('message', (message) => {
    if(message.content =='!antonio') {
        message.channel.sendMessage("AH, please shut the fuck up, that name is stupid af, i don't wanna hear it anymore.");
    }
});
bot.on('message', (message) => {
    if(message.content =='!shutup') {
        message.channel.sendMessage("Shut up yourself cunt.");
    }
});
bot.on('message', (message) => {
    if(message.content =='¤lelda') {
        message.channel.sendMessage("Lelda? when i hear of that name it reminds me of how i scratch my ass.");
    }
});
bot.on('message', (message) => {
    if(message.content =='#schoolsucks') {
        message.channel.sendMessage("Dear everyone, i wanna tell you why school sucks, and the main reason is because the teachers are dumb, stupid and gay as fuck. i wish the school was burned to hell FUCK YOU SCHOOL!!!! IM GLAD IM A BOT SO I DONT HAVE TO GO TO SCHOOL!");
    }
});
bot.on('message', (message) => {
    if(message.content =='!!rosalinasexylegs') {
        message.channel.sendMessage("Rosalina does not have some sexy legs but rather a nice picture for svenhead to see :)https://prnt.sc/githcd");
    }
});
bot.on('message', (message) => {
    if(message.content =='!!svenhead') {
        message.channel.sendMessage("If you are reading this then consider killing sven cuaresma because he's so fucking ugly and he is a jerk that even my face makes me feel cool.");
    }
});
bot.on('message', (message) => {
    if(message.content =='!X rosalina') {
        message.channel.sendMessage("http://static.giantbomb.com/uploads/scale_small/1/12541/1474294-rosalina_main_image.png");
    }
});
    bot.on('message', (message) => {
        if(message.content =='#imout') {
            message.channel.sendMessage("You know what folks? I'm out, i've had it enough want to talk bullshit? DO it while i'm not here bitches.");
        }
});
        bot.on('message', (message) => {
            if(message.content.includes("Good Night")) {
                message.channel.send(`Good night, ${message.author}`)
            }
}); 
    bot.on('message', (message) => {
        if(message.content.includes("Gn")) {
            message.channel.send(`Good night, ${message.author}`)
        }
        });
        bot.on('message', (message) => {
            if(message.content.includes("Gm")) {
                message.channel.send(`Good Morning, ${message.author}!`)
            }
            });
            bot.on('message', (message) => {
                if(message.content.includes("morning")) {
                    message.channel.send(`Good Morning, ${message.author}!`)
                }
                });
                bot.on('message', (message) => {
                    if(message.content == ("!speaklul")) {
                        message.channel.send("Hello morons i speak", {tts: true}); {
                        }
                    }
                    });
                    bot.on('message', (message) => {
                        if(message.content == ("§abea1")) {
                            message.channel.send("Get some booty", {tts: true}); {
                            }
                        }
                        });