var Harvest = require('harvest')
    , harvest = new Harvest({
        subdomain: process.env.HARVEST_SUBDOMAIN,
        email: process.env.HARVEST_EMAIL,
        password: process.env.HARVEST_PASSWORD
    })
    TimeTracking = harvest.TimeTracking;

console.log("starting")

TimeTracking.daily({}, function(err, tasks) {
    if (err) throw new Error(err);

    console.log(tasks);
});