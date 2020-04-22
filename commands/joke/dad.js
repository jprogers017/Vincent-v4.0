const Commando = require('discord.js-commando');
const fs = require('fs');

class DadJokeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dadjoke',
            aliases: [],
            group: 'joke',
            memberName: 'dad',
            description: ``
        });
    }
    async run(message) {
        try {
            let dadJokes = this.client.jokes.dadJokes;
            let rand = dadJokes[Math.floor(Math.random() * dadJokes.length)];

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

module.exports = DadJokeCommand;