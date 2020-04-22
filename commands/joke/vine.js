const Commando = require('discord.js-commando');
const fs = require('fs');

class VineCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'vine',
            aliases: [],
            group: 'joke',
            memberName: 'vine',
            description: ``
        });
    }
    async run(message) {
        try {
            //https://www.youtube.com/playlist?list=PLCRi2kg6z92FPyTu4ut49faqAYPS5eBsA
            //https://www.youtube.com/watch?v=9fNjNzbFLT8&list=PLCRi2kg6z92FPyTu4ut49faqAYPS5eBsA&index=353
            let vine = this.client.jokes.vines;
            let rand = vine[Math.floor(Math.random() * vine.length)];

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say(rand);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = VineCommand;