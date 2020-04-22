const Commando = require('discord.js-commando');
const fs = require('fs');

class TikTokCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'tiktok',
            aliases: [],
            group: 'joke',
            memberName: 'tiktok',
            description: ``
        });
    }
    async run(message) {
        try {
            let tiktok = this.client.jokes.tiktoks;
            let rand = tiktok[Math.floor(Math.random() * tiktok.length)];

            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (tiktok.length === 0) {
                return message.say(`I don't have any yet :(`);
			} else {
                return message.say(rand);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = TikTokCommand;