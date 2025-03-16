const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods keep track of events

customEmitter.on("response", ()=>{
    console.log(`data recieved`)
})

// raise an event

setTimeout(() => {
    customEmitter.emit("response")
}, 2000);