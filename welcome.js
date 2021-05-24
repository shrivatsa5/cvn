let bot = require('./server');
bot.on('guildMemberAdd', (member) => {
  member.send(
    '***WELCOME TO COVID VACCINE NOTIFIER***' +
      '\n' +
      'These are the commands  you can use:' +
      '\n' +
      '***$register***' +
      '\n' +
      '***$resetmyinfo***' +
      '\n' +
      '***$district***' +
      '\n' +
      '***$pincode***' +
      '\n' +
      '***$subscribe***' +
      '\n' +
      'For any help regarding the commands, enter' +
      '*** $help***' +
      ' followed by the command name separated by space.' +
      '\n' +
      '\n' +
      'To know all the functionalities enter' +
      '***$CVN-Bot***' +
      '\n' +
      '\n' +
      '***DM Me***' +
      '\n' +
      '\n' +
      '\n' +
      '***STAY HOME STAY SAFE***'
  );
});
