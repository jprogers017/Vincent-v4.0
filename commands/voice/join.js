const Commando = require('discord.js-commando');

class JoinCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['connect'],
            group: 'voice',
            memberName: 'join',
            description: ``,
            guildOnly: true
        });
    }
    async run(message) {
        try {
        	if (!messsage.guild) {
				return;
			} else if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
                return console.log(`I do not have permission to send messages in ${message.channel.name} from ${message.guild.name} (${message.guild.owner.user.username})`);
            } else if (message.member.voice.chanel) {
                const connection = await message.member.voice.channel.join();
            } else {
                return message.say(`You're not in a voice channel!`);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = JoinCommand;