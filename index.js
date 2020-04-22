const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const fs = require('fs');
const path = require('path');
const config = require('./config/config.js');
const online = require('./online.js');

const jokes = JSON.parse(fs.readFileSync('./config/jokes.json', 'utf-8'));
const token = process.env.token;

const client = new Commando.Client({
    commandPrefix: config.prefix,
    owner: [config.owner],
    disableEveryone: true,
    unknownCommandResponse: false
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['administrator', 'Administrative Commands'],
        ['general', 'General Commands'],
        ['information', 'Informational Commands'],
        ['joke', 'Joke Commands'],
        ['voice', 'Voice Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        prefix: false,
        ping: false,
        eval: true
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.config = config;
client.jokes = jokes;

function readEvents() {
    fs.readdir('./events/', (err, files) => {
        if (err) return console.error(err);
        let eventNumber = 0;
        console.log('\nEvents loading...');
        files.forEach(file => {
            try {
                const event = require(`./events/${file}`);
                let eventName = file.split(".")[0];
                ++eventNumber;
                client.on(eventName, event.bind(null, client));
                delete require.cache[require.resolve(`./events/${file}`)];
            } catch (err) {
                console.log(`Could not load event: ${file}\n   ${err}`);
            }
        });
        console.log(`${eventNumber} events loaded!`);
    });
}

readEvents();
client.login();