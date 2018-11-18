const discord = require('discord.js');
const config = require("./config.json");
const prefix = config.Prefix;

var bot = new discord.Client();

//terminal indicator that bot in working
bot.on("ready", function(){
    console.log("Ready!");
});

//if(message.author.id !== config.ownerID) return;

//Yeet Array of phrases
var yeetPhrasesArray = ["Gimme dat phat Yeet!", "No time for sheets, Gotta hit them Yeets!",
 "Yeet my dude!", "Hold on! ...Gotta pull out my.. Yeet!","Y'all mind if I hit that Yeet!", "Wait... Yeet!",
 "Yeetums..Please?", "Give me that Yeet you pumpkin pie haircut'd FREAK!"];
//Dank Array of phrases
var dankPhrasesArray = ["Dank A F", "I have the Dankest of memes", "Bro, Dank", "You have 3 knees? Dank"];

//for commands and keywords
bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;
    //for the Yeetness
    if(message.content.includes(prefix + "Yeet")) {
        message.channel.send(yeetPhrasesArray[Math.floor(Math.random() * yeetPhrasesArray.length)]);
    } else if(message.content.includes(prefix + "yeet")) {
        message.channel.send(yeetPhrasesArray[Math.floor(Math.random() * yeetPhrasesArray.length)]);
    }
    //for the Dankness
    if(message.content.includes(prefix + "dank")) {
        message.channel.send(dankPhrasesArray[Math.floor(Math.random() * dankPhrasesArray.length)]);
    } else if(message.content.includes(prefix + "dank")) {
        message.channel.send(dankPhrasesArray[Math.floor(Math.random() * dankPhrasesArray.length)]);
    } else if(message.content.includes(prefix + "who")){
        message.channel.send("You are the Dankest of them all...");
    }
    //Whether we wanted or not meme
    if (message.content.includes(prefix + "whether")){
        message.channel.send("We've stepped into a war with the Cabal on Mars. So lets get to taking out their command, one by one. Valus Ta'aurc. From what I can gather he commands the Siege Dancers from an Imperial Land Tank outside of Rubicon. Hes well protected, but with the right team, we can punch through those defenses, take this beast out, and break their grip on Freehold.");
    }
});

//for sending pictures or gif's
bot.on("message", function(message){
    if(message.content.includes(prefix + "Cry")){
        message.channel.send("Why must I cry.. Why..", {files:["./images/crying.gif"]});
    }
    if(message.content.includes(prefix + "Good bot")){
        message.channel.send("Thank you kind sir!", {files:["./images/wet_yet.jpg"]});
    }
    // if(message.content.includes("!what")){
    //     message.channel.send({files:["./images/canyounot.gif"]});
    // }
    // if(message.content.includes("!huh")){
    //     message.channel.send({files:["./images/huh.gif"]});
    // }
    // if(message.content.includes("!right")){
    //     message.channel.send({files:["./images/yeahright.gif"]});
    // }    
});
const token = config.Token;
bot.login(token);