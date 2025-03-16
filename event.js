const School = require('./school');
const school = new School();   //akne school class er object create kora holo karon School muloto akta class poperty tai akne class kaj korbe nah deke obj method create kora holo
// on and emit methods keep track of events

school.on("response", ({ time, message })=>{
    console.log(`data recieved ${time} ${message} `)
})

school.startNew()