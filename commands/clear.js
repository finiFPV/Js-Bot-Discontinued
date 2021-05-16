module.exports = {
    name: 'cc',
    description: "Clean up!",
    async execute(client, message, args, cmd) {
        if (cmd === 'cc') {
            if (message.member.hasPermission('ADMINISTRATOR')) {
                console.log('!Clear');
                if (!args[0]) return message.reply("Please enter amount of messages to delete.!");
                if (isNaN(args[0])) return message.reply("Plese enter real number!");

                if (args[0] > 100) return message.reply("You can't delete more than 100 messages at a time!");
                if (args[0] < 1) return message.reply("You nead to deleta atleast 1 message!")

                await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                    message.channel.bulkDelete(messages);
                });
            } else {
                message.channel.send("Only administrator can do this.")
            }
        }
    }
}