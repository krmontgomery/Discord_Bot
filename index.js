var {Client, RichEmbed} = require('discord.js');
const prefix = process.env.Prefix;
var client = new Client();

//terminal indicator that bot in working
client.on("ready", function(){
    console.log("Ready!");
});

//if(message.author.id !== config.ownerID) return;

//Yeet Array of phrases
var yeetPhrasesArray = ["Gimme dat phat Yeet!", "No time for sheets, Gotta hit them Yeets!",
 "Yeet my dude!", "Hold on! ...Gotta pull out my.. Yeet!","Y'all mind if I hit that Yeet!", "Wait... Yeet!",
 "Yeetums..Please?", "Give me that Yeet you pumpkin pie haircut'd FREAK!"];
//Dank Array of phrases
var dankPhrasesArray = ["Dank A F", "I have the Dankest of memes", "Bro, Dank", "You have 3 knees? Dank"];

//**************  commands and keywords
client.on("message", function(message){
    if (message.author.equals(client.user)) return;
//**************  for the Yeetness
    if(message.content.includes(prefix + "Yeet")) {
        message.channel.send(yeetPhrasesArray[Math.floor(Math.random() * yeetPhrasesArray.length)]);
    } else if(message.content.includes(prefix + "yeet")) {
        message.channel.send(yeetPhrasesArray[Math.floor(Math.random() * yeetPhrasesArray.length)]);
    }
//***************  for the Dankness
    if(message.content.includes(prefix + "Dank")) {
        message.channel.send(dankPhrasesArray[Math.floor(Math.random() * dankPhrasesArray.length)]);
    } else if(message.content.includes(prefix + "dank")) {
        message.channel.send(dankPhrasesArray[Math.floor(Math.random() * dankPhrasesArray.length)]);
    } else if(message.content.includes(prefix + "who")){
        message.channel.send("You are the Dankest of them all...");
    }
//***************  Whether we wanted or not meme
    if (message.content.includes(prefix + "whether")){
        message.channel.send("We've stepped into a war with the Cabal on Mars. So lets get to taking out their command, one by one. Valus Ta'aurc. From what I can gather he commands the Siege Dancers from an Imperial Land Tank outside of Rubicon. Hes well protected, but with the right team, we can punch through those defenses, take this beast out, and break their grip on Freehold.");
    }
});

//***************  for sending pictures or gif's
client.on("message", function(message){
    if(message.content.includes(prefix + "cry")){
        message.channel.send("Why must I cry.. Why..", {files:["./images/crying.gif"]});
    }
    if(message.content.includes(prefix + "wet")){
        message.channel.send("Thank you kind sir!", {files:["./images/wet_yet.jpg"]});
    }
    if(message.content.includes(prefix + "what")){
        message.channel.send({files:["./images/canyounot.gif"]});
    }
    if(message.content.includes(prefix + "huh")){
        message.channel.send({files:["./images/huh.gif"]});
    }
    if(message.content.includes(prefix + "right")){
        message.channel.send({files:["./images/yeahright.gif"]});
    } 
    if(message.content.includes(prefix + "notbad")){
        message.channel.send({files:["./images/vince.gif"]});
    } 
    
    //***********  Trump commands for @DemosKratos
    if(message.content.includes(prefix + "trump")){
        message.channel.send({embed: {
            color: 2551650,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "The Big Bad Orange Man",
            url: "https://www.usatoday.com/story/news/politics/2018/10/02/trump-unpopular-worldwide-views-u-s-historic-lows-poll-shows/1492940002/",
            description: "Because we just need to rake the leaves..",
            fields: [
              {
                name: "Don't think Trump is Dank?",
                value: "Go here [If you want to get to work on them leaves](https://www.nytimes.com/2018/11/18/world/europe/finland-california-wildfires-trump-raking.html?rref=collection%2Ftimestopic%2FTrump%2C%20Donald%20J.&action=click&contentCollection=timestopics&region=stream&module=stream_unit&version=latest&contentPlacement=1&pgtype=collection) and get your Dank on."
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Your Dankness"
            }
          }
        });
    }
    
//****************  Commands listing variable for commands function
    var commandList = {embed: {
        color:1280128,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title:"Commands List",
        description:"All of the available commands for this server.",
        fields: [ 
            {
                name: "!yeet or !Yeet",
                value: "Sends a randomized Yeet phrase from our array of yeet phrases."
            },
            {
                name: "!dank or !Dank",
                value: "Sends a randomized Dank phrase from our array of dank phrases."
            },
            {
                name: "!who",
                value: "For whom is the Dankest?"
            },
            {
                name: "!whether",
                value: "Kicking Valus Ta'aurc in the Cabals."
            },
            {
                name: "!trump",
                value: "When you feel like basking in the big orange."
            },
            {
                name: "!cry",
                value: "For when you wanna cry.(gif)"
            },
            {
                name:"!wet",
                value: "Are your dry or are you wet yet? (gif)"
            },
            {
                name:"!huh",
                value: "What was that? (gif)"
            },
            {
                name:"!what",
                value: "Are you confused? Then use this command.(gif)"
            },
            {
                name: "!right",
                value: "When you're in disbelief. (gif)"
            },
            {
                name: "!notbad",
                value: "When it's not to bad. (gif)"
            }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Your Dankness"
        }
    }};
//***************  functions for commands list
    if(message.content.includes(prefix + "FupaCommands")){
        message.channel.send(commandList);
    } else if (message.content.includes(prefix + "help")){
        message.channel.send(commandList);
    }
});
//***************  RichEmbed 
client.on("message", message => {
    if(message.content === "Give me news"){
        const embed = new RichEmbed()
        .setTitle("Your weekly news w/ King Fupa")
        .setAuthor("Lauren Frayer","https://www.npr.org/people/463861805/lauren-frayer")
        .setColor(0x00AE86)
        .setDescription("Holy Crap!")
        .setFooter( client.user.username, new Date())
        .setImage("https://media.npr.org/assets/img/2018/11/21/ap_050104019273_wide-cf719d3cda02d856a7adb9367793f25e8631030d-s1600-c85.jpg")
        .setThumbnail("https://pbs.twimg.com/profile_images/789948995183316993/POwGu01F_400x400.jpg")
        .setTimestamp()
        .setURL("https://www.npr.org/2018/11/21/669909594/american-reportedly-killed-in-flurry-of-arrows-as-tribe-defends-its-island-off-i")
        .addField("Want more news? Wanna make this better for you and the Server?")
        .addField("Put your ideas in the Alt Ctrl Elite server!", "Any ideas you may have for a news command bot, put in the fupa bot channel in the Alt Ctrl Elite Server. Thanks!.", true)
        message.content.send(embed);
    }
});

const token = process.env.token;
client.login(token).catch(err => console.log(err));