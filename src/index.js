require('dotenv').config()
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
    intents: [

        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on('ready' , (c) => {
    console.log(`${c.user.tag} tá on 😎 `)

    client.user.setActivity({
        name: 'Breaking Bad',
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=gDjMZvYWUdo',
    })
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'test') {
        interaction.reply('test');
    }
}
)

client.on('messageCreate', (message) => {
    if (message.author.bot) {''
        return;
    }

    if (message.content === 'BREK') 
        message.reply('VIADASSO');
    }
)

client.on('messageCreate', (message) => {
    if (message.author.bot) {''
        return;
    }

    if (message.content === 'raffa') 
        message.reply('gay');
    }
)

client.on('messageCreate', (message) => {
    if (message.author.bot) {''
        return;
    }

    if (message.content === 'default') 
        message.reply('skeleton');
    }
)

client.login('MTEwNzgxMzgwNDIwNjcyNzE4OQ.GVwqP-.Jny-TrWHsi2SKu2i8VC0FxaOn9jZ9DYYd6TRdM');