(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
        |Extend the bot here, either by calling another function or here directly.
        |Model code for a bot command:

        |bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "IFeelFreeBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        startupCap: 10, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: true, // true or false
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "residentdj",
        motdEnabled: false,
        motdInterval: 5,
        motd: "[[INFO]] We currently have staff positions available please apply here: https://zodiac.typeform.com/to/ZFLTAz",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "http://tinyurl.com/IFeelFreeRoomInfo",
        rulesLink: "http://tinyurl.com/IFeelFreeRoomInfo",
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://tinyurl.com/IFeelFreeWebsite",
        intervalMessages: ["[[INFO]] Welcome to I Feel Free! Please take the time to check out our website! http://tinyurl.com/IFeelFreeWebsite", "[[INFO] Please remember to follow the room rules here: http://tinyurl.com/IFeelFreeRoomInfo","[[INFO]] Please feel free to ask the staff any questions you may have", "[[Staff APP]] We are currently accepting new staff! Please apply here https://zodiac.typeform.com/to/ZFLTAz"],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/DJZodiac/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/DJZodiac/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
