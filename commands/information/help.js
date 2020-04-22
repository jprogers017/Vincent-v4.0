const Commando = require('discord.js-commando');

class HelpCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: [],
            group: 'information',
            memberName: 'help',
            description: ``,
            guildOnly: true
        });
    }
    async run(message) {
        try {
            if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else {
                return message.say(`NOT DONE SRY`);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = HelpCommand;