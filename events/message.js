const Discord = require('discord.js');

module.exports = async (client, message) => {
    const msg = message.content.toLowerCase();
    const args = message.content.trim().split(/ +/g);
    const config = client.config;
    const ignored = client.ignored;
    const ids = config.ids;

    const server = client.guilds.get(ids.server);
    const annoucements = server.channels.get(ids.annoucements);
    const logs = server.channels.get(ids.logs);
    const dms = server.channels.get(ids.dmLogs);
    const botTesting = server.channels.get(ids.botTesting);

    let dmContent = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor('73b6ff')
        .setDescription(`<@${message.author.id}>\n*${message.content}*`)
        .setTimestamp();

    if (message.author.bot) {
        return;
    } else if (message.channel.type === "dm") {
        return dms.send(dmContent);
    } else if (!message.guild.me.hasPermission('SEND_MESSAGES')) {
        return;
    }

    for (let i = 0; i < config.jokeSwears.length; i++) {
        if (config.jokeSwears[i].test(msg)) {
            return message.channel.send('How dare you use that kind of language here?');
        }
    }

    if (msg.includes('guess ill die') || msg.includes("guess i'll die")) {
        return message.channel.send(":(");
    } else if (msg.includes('yeehaw') || msg.includes('yee haw')) {
        message.channel.send('🤠');
    } else if (((args[0].toLowerCase() == "i'm" || args[0].toLowerCase() == 'im')) || (args[0].toLowerCase() == 'i' && args[1].toLowerCase() == 'am')) {
        if (!args[1]) {
            return;
        // } else if (config.dadBan[0].test(args[1])) {
        //     return message.channel.send(`LMAO, u rly thot.`);
        } else {
			let dadMessage = message.cleanContent.trim().split(/ +/g).slice(1).join(' ');
            return message.channel.send(`Hi, *${dadMessage}*, I'm Vincent!`);
        }
    } else if (msg.includes('press f to pay respects')) {
        return message.react('🇫');
    } else if (msg.includes('woof ')) {
        return message.react('🐶');
    } else if (msg.includes('meow ')) {
        return message.react('🐱');
    } else if (msg.includes('chiken ')) {
        return message.react('🐔');
    } else if (msg.includes('moo ')) {
        message.react('🐮');
        return;
    } else if (!msg.startsWith(client.commandPrefix)) {
        return;
    } else if (msg === client.commandPrefix) {
        return;
    }
};