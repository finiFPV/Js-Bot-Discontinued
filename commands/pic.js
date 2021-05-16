var Scraper = require('image-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'pic',
    description: "image!!!",
    async execute(client, message, args, cmd) {
        if (cmd === 'pic') {
            console.log('!Image');
            const image_query = args.join(' ');
            if (!image_query) return message.channel.send('Please enter images name.');

            const image_results = await google.scrape(image_query, 1);
            message.channel.send(image_results[0].url);
        }
    }
}