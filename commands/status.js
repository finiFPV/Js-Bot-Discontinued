const fin = process.env.fin;
module.exports = {
    name: 'status',
    description: "Bots status!",
    execute: (client, message, args, cmd) => {
        if (cmd === 'status') {
            if (message.author.id != fin) return message.channel.send("Only the bots owner can do this.")
            console.log('!Status')

            const content = message.content.replace('!status ', '')

            client.user.setPresence({
                activity: {
                    name: content,
                    type: 0,
                }
            })
        }
    }
}

