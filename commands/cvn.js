let cvn_cmd = {
  name: 'cvn',
  description: 'welcomes you and gives you more insight to our bot',
  async execute(message, args) {
    message.channel.send(
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
  },
};
module.exports = cvn_cmd;
