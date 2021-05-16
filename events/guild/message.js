require('dotenv').config();
module.exports = (Discord, client, message) => {
    const prefix = process.env.prefix;


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) {
        client.commands.get('status').execute(client, message, args, cmd);
        client.commands.get('cc').execute(client, message, args, cmd);
        client.commands.get('servers').execute(client, message, cmd);
        client.commands.get('serverinfo').execute(client, message, cmd);
        client.commands.get('meme').execute(client, message, cmd);
        client.commands.get('userinfo').execute(client, message, args, cmd);
        client.commands.get('warn').execute(message, args, cmd);
        client.commands.get('wl').execute(message, args, cmd);
        client.commands.get('botinf').execute(client, message, cmd);
    }
}