const EventEmitter = require('events');
const School = require('./school');

// on and emit methods keep track of events

School.on("response", ({ time, message })=>{
    console.log(`data recieved ${time} ${message} `)
})
const school1 = new School();
school1.startNew()