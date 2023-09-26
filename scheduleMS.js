/* A MICROSERVICE FOR SCHEDULING DATA IMPORTS FROM PORSSISAHKO:NET API
New data is availbe daily at 12.00 UTC 14.00 local time or 15.00 when daylight saving time or simmer time is on */

// LIBRARIES AND MODULES

const cron = require("node-cron") // The scheduling library

// Run a function every day at 15.30
cron.schedule("30 15 * * *", () => {
    console.log("This will be executed daily at 15.30")
});

// A test to check sceduler: run it every minute
cron.schedule("* * * * *", () => {
    console.log("This will be executed 5 minutes interval")
});

// A test to check sceduler: run it every 5 minutes
cron.schedule("*/5 * * * *", () => {
    console.log("This will be executed 5 minutes interval")
});

// Runnin the task every full hour according to a list
cron.schedule("0 15,19,22 * * *", () => {
    console.log("This will be executed at 3, 7 and 10 o'clock PM")
});

// Running the task hourly between 15 and 20 
// A test to check sceduler: run it every 5 minutes
cron.schedule("0 15-20 * * * *", () => {
    console.log("This will be executed every hour from 3 to 8 o'clock PM")
});

// Use error handling when running a task
cron.schedule("30 15 * * *", () => {
    try {
     console.log("This will be executed daily at 15.30")}
    catch (error) {
        console.log("An error occurred") }
});

// Use a counter variable to keep record of successfull operation
let counter = -1

// Try to run operation in 5 minute intervals from 3 to 4 PM
cron.schedule("*/5 15 * * *",() => {
    try {
        // Check if flag is still true to run the operation
        if (counter != 0) {
            console.log("This will be executed every 5 mins at 15:00 until 15:55")};
            counter = false; // If successfull operation set the flag to false
    }
    catch (error) {
        console.log("An error occurred");
        counter = true }; // if an error occured set the flag 
    }); 