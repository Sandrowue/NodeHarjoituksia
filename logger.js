const fs = require('fs');

const timestamp = new Date();
const isoTimeStamp = timestamp.toISOString();
let operation = 'Data Fetch operation';
let status = 'processes successfully';
let entry = operation + ' ' + status + ' @ ' + isoTimeStamp + '/n'

console.log(entry);

fs.appendFile('dataOperation.log', entry, (err) => {
    if (err) {
        console.log(err);
    }
})




