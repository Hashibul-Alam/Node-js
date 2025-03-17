const http = require('http')

const server = http.createServer((req, res)=>{
    res.write('Hello World!');
    res.write('How are you');
    res.end();
});

server.listen(4000);
console.log('Server is listening on port 4000') //akne server create kora holo and port 4000 a listen kora holo;