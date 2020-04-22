const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const io = require('console-read-write');

class embed1Command extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            aliases: [],
            group: 'administrator',
            memberName: 'embed',
            description: ``,
            guildOnly: true
        });
    }
    async run(message) {
        try {
			// let server;
			// let channel;

            // let author = message.author.tag;
			// let authorIMG = message.author.avatarURL;
            // let title;
            // let desc;
            // let img;

            // let embed = new Discord.RichEmbed()
            //     .setAuthor(author, authorIMG)
            //     .setTitle(title)
            //     .setDescription(desc)
            //     .setImage(img)
            //     .setColor(message.author.displayHexColor);
                
            // message.say(embed);
			message.say('Incomplete command, try again later!');
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = embed1Command;