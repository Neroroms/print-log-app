import cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("Hello at " + new Date() + " (￣ω￣)/")
});
