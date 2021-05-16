const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const scalingChannels = require('./util/scaling-channels');
const mongo = require('./util/mongo');
require('dotenv').config();
// const guildId = 'ID'
const WOKCommands = require('wokcommands')

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command-handler', 'event-handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', async () => {
    scalingChannels(client)
    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [guildId],
        showWarns: false,
    })
    // .setBotOwner(['ID'])

    await mongo().then((mongoose) => {
        try {
            console.log('Connected to mongo!')
        } finally {
            mongoose.connection.close()
        }
    })
})

client.login(process.env.token);