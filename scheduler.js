var cron = require('node-cron');

cron.schedule('30 * * * * *', () => {
    console.log('This is half a minute!');
});

cron.schedule('1-59 * * * *', () => {
    console.log('Minuteman hits!')
});