const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require('fs');
const config = require('./config.json');

const appendChunkToFile = (fileName) => {
    const pathToFile = __dirname + `/recordings/${fileName}.pcm`;
    return fs.createWriteStream(pathToFile, { flags: 'a' });
};

client.on('message', msg => {
	let x = msg.guild.members.cache.get('764785814700818453')
	
    if (msg.content.startsWith(config.PREFIX)) {
        const commandBody = msg.content.substring(config.PREFIX.length).split(' ');
        const channelName = commandBody[1];

        if (commandBody[0] === ('enter') && commandBody[1] && commandBody[2]) {
            const voiceChannel = msg.guild.channels.cache.find(channel => channel.name === channelName);

            if (!voiceChannel || voiceChannel.type !== 'voice')
						
               return msg.channel.send(new Discord.MessageEmbed() .setAuthor("System Nagrywania Dźwięku","https://sudis.is-pretty.sexy/AEersdy.png") .setDescription(`Ten #${channelName} nie istnieje lub **nie jest** kanałem audio. Pamiętaj, uważam kanały o tej samej nazwie co kanały tekstowe. \n \n :white_small_square: **Kod Błędu:** \`0001\` \n :white_small_square: **Wyjaśnienie:** \`Wybierz kanał audio.\` `) .setColor("2f3136") );

            console.log(`Sliding into ${voiceChannel.name}...`);
            msg.channel.send(new Discord.MessageEmbed() .setAuthor("System Nagrywania Dźwięku","https://sudis.is-pretty.sexy/8US1Shm.png") .setDescription(`Zaloguj się do wybranego kanału o nazwie \`${voiceChannel.name}\`. Nagrywanie głosu rozpocznie się wkrótce. \n\n :white_small_square: **Status:** Zalogowano się do kanału pomyślnie. \n :white_small_square: **Akcja:** Dźwięk „ding” jest odtwarzany **przed rozpoczęciem** nagrywania głosu.`) .setColor("2f3136") )
            voiceChannel.join()
                .then(conn => {

                    const dispatcher = conn.play('./sounds/ding.mp3');
                    dispatcher.on('start', () => { console.log('ding.mp3 is playing..'); });
					dispatcher.on('start', () => { msg.channel.send('Głos Ding zaczął grać.'); });
                    dispatcher.on('finish', () => { console.log('ding.mp3 has finished playing..'); });
                    dispatcher.on('finish', () => { msg.channel.send('Głos Dinga umilkł.'); });
                    console.log(`Joined ${voiceChannel.name}!\n\nREADY TO RECORD\n`);
					msg.channel.send(new Discord.MessageEmbed() .setAuthor("System Nagrywania Dźwięku","https://sudis.is-pretty.sexy/9ffpzcY.png") .setDescription(`Głos Dinga został zagrany pomyślnie i teraz jestem gotowy do nagrywania. Kanał, który nagrywam, jest kanałem ${voiceChannel.name} \n \n :white_small_square: **Status:** Gotowy! \n :white_small_square: **Akcja:** Będę nagrywać od momentu, gdy ktoś zacznie mówić.`) .setColor("2f3136"))
                    x.setNickname(`NA ŻYWO! ${x.displayName}`)
                    client.user.setPresence({ activity: { name: "🔴 NA ŻYWO!" }, status: "dnd" });

                    const receiver = conn.receiver;
                    conn.on('speaking', (user, speaking) => {
                        if (speaking) {
                            console.log(`${user.username} started speaking`);
							msg.channel.send(`Osoba **${user.username}** zaczęła mówić.`)
                            const audioStream = receiver.createStream(user, { mode: 'pcm' });
                            audioStream.pipe(appendChunkToFile(commandBody[2]));
                            audioStream.on('end', () => { console.log(`${user.username} stopped speaking`); });
							audioStream.on('end', () => { msg.channel.send(`Osoba **${user.username}** przestała mówić.`); });
                        }
                    });
                })
                .catch(err => { throw err; });
        }
        if (commandBody[0] === ('exit') && commandBody[1]) {
            const voiceChannel = msg.guild.channels.cache.find(channel => channel.name === channelName);
            console.log(`Slipping out of ${voiceChannel.name}...`);
			msg.channel.send(new Discord.MessageEmbed() .setAuthor("System Nagrywania Dźwięku","https://sudis.is-pretty.sexy/AEersdy.png") .setDescription(`Moja praca nad kanałem **${voiceChannel.name}** została zakończona. Myślę, że wszystko jest w porządku. Możesz zobaczyć szczegóły w dolnej sekcji. \n \n :white_small_square: **Status:** Nagrywanie zostało przerwane. \n :white_small_square: **Akcja:** Nagrałem rozmowy i pomyślnie utworzyłem plik. \n :white_small_square: **Format Nagrywania:** \`.pcm\` \n\n :question: **Jak otworzyć plik dziennika?** \n **»** W tym celu musisz mieć program Audacity. Konwersja pliku audio będzie dość prosta, jeśli taki masz. W sekcji „Plik” przejdź na kartę „Importuj”. Następnie wybierz opcję „Surowe dane”. Możesz uzyskać dostęp do pliku audio, wprowadzając informacje widoczne poniżej. \n\n **Encoding:** Singed 16-bit PCM \n **Byte Order:** Little-endian \n **Channels:** 2 Channels (Stereo) \n **Sample Rate:** 48 000 Hz`) .setColor("2f3136"))
			x.setNickname(x.displayName.replace("NA ŻYWO!", ""));
	        client.user.setPresence({ activity: { name: "🔰 Nie jestem teraz na liście." }, status: "idle" });
            voiceChannel.leave();
            console.log(`\nSTOPPED RECORDING\n`);
        }
    }
});

client.login(config.BOT_TOKEN);

client.on('ready', () => {
    console.log(`\nONLINE\n`);
});