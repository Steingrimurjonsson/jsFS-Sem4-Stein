// EXERCISE Simple OS info file WEEK 2 JS FULLSTACK
/*
Getting started with Node (Day-2) 
*/
const os = require('os');
function osInformation () {
        return {
            platform: os.platform(),
            osType: os.type(),
            freeMemory: os.freemem(),
            totalMemory: os.totalmem(),
            EOL: os.EOL
        };
    };
module.exports.osInfo = osInformation;
