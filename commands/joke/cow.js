const Commando = require('discord.js-commando');
const fs = require('fs');

class CowJokeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cowjoke',
            aliases: [],
            group: 'joke',
            memberName: 'cow',
            description: ``
        });
    }
    async run(message) {
        try {
            let cowJokes = this.client.jokes.cowJokes;
            let rand = cowJokes[Math.floor(Math.random() * cowJokes.length)];
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

module.exports = CowJokeCommand;