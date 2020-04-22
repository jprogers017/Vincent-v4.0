const Commando = require('discord.js-commando');
const oneLinerJoke = require('one-liner-joke');

class JokeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            aliases: [],
            group: 'joke',
            memberName: 'joke',
            description: ``
        });
    }
    async run(message) {
        try {
            let randomJoke = oneLinerJoke.getRandomJoke();
            let rand = randomJoke.body;

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

module.exports = JokeCommand;