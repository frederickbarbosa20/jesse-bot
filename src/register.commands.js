require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'saul',
        description: 'saul goodman. '
    },
];

const rest = new REST({ version: '10'}).setToken('MTEwNzgxMzgwNDIwNjcyNzE4OQ.GVwqP-.Jny-TrWHsi2SKu2i8VC0FxaOn9jZ9DYYd6TRdM'); 

(async () => {
     try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands('1107813804206727189', '1107814043537915966'),
            { body: commands }
        )
        
        console.log('Slash commands were registered succesfully!');''
     } catch (error) {
        console.log(`There was an error: ${error}`);
     }
})();