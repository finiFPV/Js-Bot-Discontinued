const Discord = require('discord.js')

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Every command explained.',
    callback: ({ }) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Commands explanations`, 'https://i.imgur.com/452TWzr.png')
            .setColor(Math.floor(Math.random() * 16777214) + 1,)
            .setDescription('Prefix: `!`')
            .addFields(
                { name: 'cc:', value: '`Clears messages.`' },
                { name: 'meme:', value: '`Sends an meme`' },
                { name: 'serverinfo:', value: '`Info about server`' },
                { name: 'servers:', value: '`Shows the servers the bot is in.`' },
                { name: 'userinfo:', value: '`Shows info about user`' },
                { name: 'warn:', value: '`warns an member`' },
                { name: 'wl:', value: '`Shows warnings user has`' },
            )
            .setFooter('❤️Made by fininimini#7229❤️')
        return embed
    }
}
