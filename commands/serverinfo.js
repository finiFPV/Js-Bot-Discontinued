const Discord = require('discord.js')

module.exports = {
    name: 'serverinfo',
    description: "Shows the info about an server!",
    execute: (client, message, cmd) => {
        if (cmd === 'serverinfo') {
            console.log('!Serverinfo')
            let rolemap = message.guild.roles.cache
                .sort((a, b) => b.position - a.position)
                .map(r => r)
                .join(",");
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";
            const embed = new Discord.MessageEmbed()
                .setDescription(`**Server Info**`)
                .setColor(Math.floor(Math.random() * 16777214) + 1,)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField('``💬Name:``', `${message.guild.name}`, true)
                .addField('``👁️‍🗨️Owner:``', `${message.guild.owner.user.tag}`, true)
                .addField('``👷Role Count:``', `${message.guild.roles.cache.size - 1}`, true)
                .addField('``😂Regular Emoji Count:``', `${message.guild.emojis.cache.filter(emoji => !emoji.animated).size}`, true)
                .addField('``🤩Animated Emoji Count:``', `${message.guild.emojis.cache.filter(emoji => emoji.animated).size}`, true)
                .addField('``🧍Member Count:``', `${message.guild.memberCount}`, true)
                .addField('``🧍Humans:``', `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
                .addField('``🤖Bots:``', `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
                .addField('``💬Text Channels:``', `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}`, true)
                .addField('``🔊Voice Channels:``', `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}`, true)
                .addField('``⏩Boost Count:``', `${message.guild.premiumSubscriptionCount || '0'}`, true)
                .addField('``🔑Verification:``', `${message.guild.verificationLevel}`, true)
                .addField('``🟢online:``', `${message.guild.members.cache.filter(member => member.presence.status === 'online').size}`, true)
                .addField('``🌙Idle:``', `${message.guild.members.cache.filter(member => member.presence.status === 'idle').size}`, true)
                .addField('``⛔Do Not Disturb:``', `${message.guild.members.cache.filter(member => member.presence.status === 'dnd').size}`, true)
                .addField('``⚫Offline:``', `${message.guild.members.cache.filter(member => member.presence.status === 'offline').size}`, true)
                .addField('``👷Roles:``', `${rolemap}`)
                .setFooter('❤️Made by fininimini#7229❤️')
            message.channel.send(embed);
        }
    }
}
