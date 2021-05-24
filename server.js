const fs = require('fs');
const express = require('express');

require('dotenv').config('./env');
//Database configured and connected
require('./Database/dbconfig');
//Get Database utility functions
const { checkForReg } = require('./Database/dbutilityfuncs');

//bot initialization
const Discord = require('discord.js');
let bot = new Discord.Client();
bot.commands = new Discord.Collection();

// const cvnbot = require('./commands/cvnbot');
//Getting essential environment variables;
const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.login(TOKEN);

// welcome(bot);

//reading all the command files of command folder and registering each command
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on('message', async (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) {
    return;
  }

  const args = message.content.slice(PREFIX.length).trim().split(' ');
  let command = args.shift().toLowerCase();
  console.log(command);

  if (command == 'cvn') {
    bot.commands.get(command).execute(message, args);
    return;
  }

  if (!bot.commands.has(command)) {
    message.reply('Command not found !');
    return;
  }

  //checking whether user registerer before using commands except register

  if (command === 'help') {
    try {
      bot.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
    return;
  }
  if (message.guild !== null) return;

  let isUserRegistered = await checkForReg(message.author.username);
  if (!isUserRegistered && command != 'register') {
    message.reply('You need to register first before using this command');
    return;
  }

  if (isUserRegistered && command == 'register') {
    message.reply(
      'You cant register twice. you can reset your personal information using ***resetmyinfo*** command'
    );
    return;
  }

  try {
    bot.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
  return;
});

module.exports = bot;
require('./schedule');
require('./welcome');

//server stuffs
const app = express();
let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}
app.listen(port);
