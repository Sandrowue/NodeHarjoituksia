const Bree = require('bree');

//TODO Make object with two methods

/*var cron = require('node-cron');

cron.schedule('30 * * * * *', () => {
    console.log('This is half a minute!');
});

cron.schedule('1-59 * * * *', () => {
    console.log('Minuteman hits!')
});*/

const bree = new Bree({
    jobs: [{
    name: 'process',
    interval: '1m'}
    ]})
bree.start()