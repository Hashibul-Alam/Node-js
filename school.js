const EventEmitter = require('events');

class School extends EventEmitter {
    startNew(){
        console.log("school is great");
       
        setTimeout(() => {
            this.emit("response", {
                message: "Class has started!",
                time: new Date().toLocaleTimeString()
            });
        }, 2000);
    }
}

module.exports = School;
